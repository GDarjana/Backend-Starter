import { IsNumber } from 'class-validator';

export class OrderItemCreateDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  quantity: number;

  //@IsNumber()
  //price: number;
}
