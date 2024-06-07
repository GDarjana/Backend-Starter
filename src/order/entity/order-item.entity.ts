import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from '@src/order/entity/order.entity';
import { OrderItemCreateDto } from '@src/order/dto/order-item-create-dto';
import { Product } from '@src/product/entity/product.entity';

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

  addQuantity(quantity: number) {
    this.quantity += quantity;
    this.updatePrice();
  }

  updatePrice() {
    this.price = this.product.price * this.quantity;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'int', nullable: true })
  price: number;

  @ManyToOne(() => Order, (order) => order.items)
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderItems, { eager: true })
  product: Product;
}
