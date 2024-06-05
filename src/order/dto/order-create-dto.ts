import { IsNotEmpty } from 'class-validator';
import { OrderItemCreateDto } from './order-item-create-dto';

export class OrderCreateDto {
  @IsNotEmpty({ message: 'Le client doit avoir des produits' })
  items: OrderItemCreateDto[];
}
