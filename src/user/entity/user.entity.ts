import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// [GDA 05/15/2024] Nouvelle entité / nouvelle table
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  mail: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar' })
  birthCity: string;
}
