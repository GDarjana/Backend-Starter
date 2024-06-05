import { IsNumber, IsString } from 'class-validator';

export class OrderItemCreateDto {
  @IsString()
  product: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;

  @IsString()
  color: string;
}
