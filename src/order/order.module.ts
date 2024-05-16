import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './controller/order.controller';
import { Order } from './entity/order.entity';
import { CreateOrderService } from './use-case/create-order.service';
import { PayOrderService } from './use-case/pay-order.service';
import { UpdateOrderShippingAddressService } from './use-case/update-order-shipping-address.service';
import { UpdateOrderInvoiceAddressService } from './use-case/update-order-invoice-address.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrderController],
  providers: [
    CreateOrderService,
    PayOrderService,
    UpdateOrderShippingAddressService,
    UpdateOrderInvoiceAddressService,
  ],
})
export class OrderModule {}
