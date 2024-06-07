import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './controller/order.controller';
import { Order } from './entity/order.entity';
import { CreateOrderService } from './use-case/create-order.service';
import { PayOrderService } from './use-case/pay-order.service';
import { UpdateOrderShippingAddressService } from './use-case/update-order-shipping-address.service';
import { UpdateOrderInvoiceAddressService } from './use-case/update-order-invoice-address.service';
import { OrderItem } from './entity/order-item.entity';
import { CreateOrderItemService } from './use-case/create-order-item.service';
import { GetProductByIdService } from 'src/product/user-case/get-product-by-id.service';
import { Product } from 'src/product/entity/product.entity';
import { GetAllOrdersByUserService } from './use-case/get-all-orders-by-user.service';
import { GetUserByMailService } from 'src/user/use-case/get-user-by-mail.service';
import { User } from 'src/user/entity/user.entity';
import { GetUserByIdService } from 'src/user/use-case/get-user-by-id.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem, Product, User])],
  controllers: [OrderController],
  providers: [
    CreateOrderService,
    PayOrderService,
    UpdateOrderShippingAddressService,
    UpdateOrderInvoiceAddressService,
    CreateOrderItemService,
    GetProductByIdService,
    GetAllOrdersByUserService,
    GetUserByMailService,
    GetAllOrdersByUserService,
    GetUserByIdService,
  ],
})
export class OrderModule {}
