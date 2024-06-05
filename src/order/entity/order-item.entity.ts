import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';
import { OrderItemCreateDto } from '../dto/order-item-create-dto';

@Entity()
export class OrderItem {
  constructor(orderItemCreateDto: OrderItemCreateDto) {
    if (orderItemCreateDto) {
      this.product = orderItemCreateDto.product;
      this.quantity = orderItemCreateDto.quantity;
      this.price = orderItemCreateDto.price;
      this.description = orderItemCreateDto.description;
      this.imageUrl = orderItemCreateDto.imageUrl;
      this.color = orderItemCreateDto.color;
    }
  }

  incrementQuantity() {
    this.quantity++;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  product: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  imageUrl: string;

  @Column({ type: 'varchar', nullable: true })
  color: string;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;
}
