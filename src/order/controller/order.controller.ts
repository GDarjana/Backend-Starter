/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { CreateOrderService } from '../use-case/create-order.service';
import { UpdateOrderShippingAddressService } from '../use-case/update-order-shipping-address.service';
import {
  Body,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { OrderCreateDto } from '../dto/order-create-dto';
import { PayOrderService } from '../use-case/pay-order.service';
import { OrderUpdateShippingAddressDto } from '../dto/order-update-shipping-address-dto';
import { OrderUpdateInvoiceAddressDto } from '../dto/order-update-invoice-address-dto';
import { UpdateOrderInvoiceAddressService } from '../use-case/update-order-invoice-address.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly CreateOrderService: CreateOrderService,
    private readonly PayOrderService: PayOrderService,
    private readonly UpdateOrderShippingAddressService: UpdateOrderShippingAddressService,
    private readonly UpdateOrderInvoiceAddressService: UpdateOrderInvoiceAddressService,
  ) {}
  @UseGuards(AuthGuard)
  @Post()
  createOrder(@Body() data: OrderCreateDto) {
    return this.CreateOrderService.createOrder(data);
  }

  @Patch(':id/pay-order')
  payOrder(@Param('id', ParseIntPipe) id: number) {
    return this.PayOrderService.payOrder(id);
  }

  @Put(':id/change-shipping-address')
  changeShippingAddress(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: OrderUpdateShippingAddressDto,
  ) {
    return this.UpdateOrderShippingAddressService.updateOrderShippingAddress(
      id,
      data,
    );
  }

  @Put(':id/change-invoice-address')
  changeInvoiceAddress(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: OrderUpdateInvoiceAddressDto,
  ) {
    return this.UpdateOrderInvoiceAddressService.updateOrderInvoiceAddress(
      id,
      data,
    );
  }
}
