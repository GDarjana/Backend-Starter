import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductCreateDto } from '../dto/product-create-dto';
import { OrderItem } from 'src/order/entity/order-item.entity';

@Entity()
export class Product {
  constructor(productItemCreateDto: ProductCreateDto) {
    if (productItemCreateDto) {
      this.title = productItemCreateDto.title;
      this.price = productItemCreateDto.price;
      this.description = productItemCreateDto.description;
      this.imageUrl = productItemCreateDto.imageUrl;
      this.color = productItemCreateDto.color;
    }
  }

  makeUnavailable() {
    this.isAvailable = false;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  imageUrl: string;

  @Column({ type: 'boolean', default: true })
  isAvailable: boolean;

  @Column({ type: 'varchar', nullable: true })
  color: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.product, {
    cascade: true,
  })
  orderItems: OrderItem[];
}
