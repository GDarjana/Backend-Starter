import { IsString } from 'class-validator';

export class OrderUpdateInvoiceAddressDto {
  @IsString()
  invoiceAddress: string;
}
