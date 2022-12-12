import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateVehicleDto, UpdateVehicleDto } from '../dtos/vehicle.dtos';
import { VehiclesService } from '../services/vehicle.service';

@ApiTags('vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(private vehiclesService: VehiclesService) { }

  @Get()
  @ApiOperation({ summary: 'List of vehicles' })
  getVehicles(
    @Query('filter') filter = "",
  ) {
    return this.vehiclesService.findAll(filter);
  }

  @Get(':vehicleId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('vehicleId', ParseIntPipe) vehicleId: number) {
    return this.vehiclesService.findOne(vehicleId);
  }

  @Post()
  create(@Body() payload: CreateVehicleDto) {
    return this.vehiclesService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateVehicleDto) {
    return this.vehiclesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.vehiclesService.remove(id);
  }
}
