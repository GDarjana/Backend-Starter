import { IsNumber } from 'class-validator';

export class OrderItemUpdateDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  quantity: number;
}
