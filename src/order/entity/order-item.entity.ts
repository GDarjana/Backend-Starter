import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';
import { OrderItemCreateDto } from '../dto/order-item-create-dto';
import { Product } from 'src/product/entity/product.entity';

@Entity()
export class OrderItem {
  constructor(orderItemCreateDto: OrderItemCreateDto) {
    if (orderItemCreateDto) {
      this.product = orderItemCreateDto.product;
      this.quantity = orderItemCreateDto.quantity;
      this.price = orderItemCreateDto.price;
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

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;
}
