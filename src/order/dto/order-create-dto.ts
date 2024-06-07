import { IsNumber } from 'class-validator';

export class OrderCreateDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  quantity: number;
}
