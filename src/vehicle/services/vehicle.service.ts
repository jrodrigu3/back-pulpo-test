import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository, FindConditions } from 'typeorm';

import { Vehicle } from '../entities/vehicle.entity';
import { CreateVehicleDto, UpdateVehicleDto } from '../dtos/vehicle.dtos';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle) private vehicleRepo: Repository<Vehicle>,
  ) { }

  findAll(filtro: string | number) {
    console.log(filtro);
    return this.vehicleRepo.find({
      where: [
        { marca: Like(`%${filtro}%`), },
        { estado: Like(`%${filtro}%`) },
        { color: Like(`%${filtro}%`) }
      ]
    },


    );
  }

  async findOne(id: number) {
    const vehicle = await this.vehicleRepo.findOne(id);
    if (!vehicle) {
      throw new NotFoundException(`vehicle with #${id} not found`);
    }
    return vehicle;
  }

  create(data: CreateVehicleDto) {
    const newVehicle = this.vehicleRepo.create(data);
    return this.vehicleRepo.save(newVehicle);
  }

  async update(id: number, changes: UpdateVehicleDto) {
    const vehicle = await this.vehicleRepo.findOne(id);
    this.vehicleRepo.merge(vehicle, changes);
    return this.vehicleRepo.save(vehicle);
  }

  remove(id: number) {
    return this.vehicleRepo.delete(id);
  }
}
