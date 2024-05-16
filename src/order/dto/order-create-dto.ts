import { IsNotEmpty } from 'class-validator';

export class OrderCreateDto {
  @IsNotEmpty({ message: 'Le client doit être renseigné' })
  customer: string;

  @IsNotEmpty({ message: 'Le client doit avoir des produits' })
  items: string;
}
