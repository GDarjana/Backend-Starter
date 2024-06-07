import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { OrderItemCreateDto } from '../dto/order-item-create-dto';
import { Product } from 'src/product/entity/product.entity';

@Entity()
export class OrderItem {
  constructor(orderItemCreateDto: OrderItemCreateDto) {
    if (orderItemCreateDto) {
      this.quantity = orderItemCreateDto.quantity;
    }
  }

  incrementQuantity() {
    this.quantity++;
  }

  initPrice() {
    this.price = this.product.price * this.quantity;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'int', nullable: true })
  price: number;

  @ManyToOne(() => Order, (order) => order.items)
  @JoinColumn({ name: 'orderId' }) // Assurez-vous que c'est le bon nom de colonne
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderItems)
  product: Product;
}
