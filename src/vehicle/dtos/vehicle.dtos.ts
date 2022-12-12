import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsDateString,
  IsDate,
  Matches,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `vehicle's name` })
  readonly marca: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly modelo: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly color: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly fechaIngreso: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly estado: string;
}

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) { }
