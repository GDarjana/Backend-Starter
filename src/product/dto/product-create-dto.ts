import { IsNumber, IsString } from 'class-validator';

export class ProductCreateDto {
  @IsString()
  title: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;

  @IsString()
  color: string;
}
