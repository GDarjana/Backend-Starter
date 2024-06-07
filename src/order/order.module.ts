import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from '@src/order/controller/order.controller';
import { Order } from '@src/order/entity/order.entity';
import { CreateOrderService } from '@src/order/use-case/create-order.service';
import { PayOrderService } from '@src/order/use-case/pay-order.service';
import { UpdateOrderShippingAddressService } from '@src/order/use-case/update-order-shipping-address.service';
import { UpdateOrderInvoiceAddressService } from '@src/order/use-case/update-order-invoice-address.service';
import { OrderItem } from '@src/order/entity/order-item.entity';
import { CreateOrderItemService } from '@src/order/use-case/create-order-item.service';
import { GetProductByIdService } from '@src/product/use-case/get-product-by-id.service';
import { Product } from '@src/product/entity/product.entity';
import { GetAllOrdersByUserService } from '@src/order/use-case/get-all-orders-by-user.service';
import { GetUserByMailService } from '@src/user/use-case/get-user-by-mail.service';
import { User } from '@src/user/entity/user.entity';
import { GetUserByIdService } from '@src/user/use-case/get-user-by-id.service';

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
