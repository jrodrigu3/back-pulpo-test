import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  marca: string;

  @Column({ type: 'int' })
  modelo: number;

  @Column({ type: 'varchar' })
  color: string;

  @Column({ type: 'date' })
  fechaIngreso: Date;
  
  @Column({ type: 'varchar' })
  estado: string;
}
