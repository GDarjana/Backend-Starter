import { IsString } from 'class-validator';

export class OrderUpdateShippingAddressDto {
  @IsString()
  shippingAddress: string;

  @IsString()
  shippingMethod: string;
}
