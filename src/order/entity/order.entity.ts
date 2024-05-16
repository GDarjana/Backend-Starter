import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OrderCreateDto } from '../dto/order-create-dto';

@Entity()
export class Order {
  constructor(orderCreateDto?: OrderCreateDto) {
    if (orderCreateDto) {
      if (orderCreateDto.items.length > 3) {
        throw new Error('Wow 3 produits ca fait un peu beaucoup la non');
      }
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.customer = orderCreateDto.customer;
      this.items = orderCreateDto.items;
      this.status = 'In progress';
      this.total = 10 * orderCreateDto.items.length;
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  createdAt: Date;
  updatedAt: Date;

  @Column({ type: 'varchar' })
  customer: string;

  @Column({ type: 'json' })
  items: string;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ type: 'int' })
  total: number;
}
