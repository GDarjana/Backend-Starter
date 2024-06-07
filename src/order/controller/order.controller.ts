/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { CreateOrderService } from '../use-case/create-order.service';
import { UpdateOrderShippingAddressService } from '../use-case/update-order-shipping-address.service';
import {
  Body,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { OrderCreateDto } from '../dto/order-create-dto';
import { PayOrderService } from '../use-case/pay-order.service';
import { OrderUpdateShippingAddressDto } from '../dto/order-update-shipping-address-dto';
import { OrderUpdateInvoiceAddressDto } from '../dto/order-update-invoice-address-dto';
import { UpdateOrderInvoiceAddressService } from '../use-case/update-order-invoice-address.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { GetAllOrdersByUserService } from '../use-case/get-all-orders-by-user.service';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly CreateOrderService: CreateOrderService,
    private readonly PayOrderService: PayOrderService,
    private readonly UpdateOrderShippingAddressService: UpdateOrderShippingAddressService,
    private readonly UpdateOrderInvoiceAddressService: UpdateOrderInvoiceAddressService,
    private readonly GetAllOrdersByUserService: GetAllOrdersByUserService,
  ) {}
  @UseGuards(AuthGuard)
  @Post()
  createOrder(@Body() data: OrderCreateDto, @Request() req) {
    return this.CreateOrderService.createOrder(req.user['sub'], data);
  }

  @Patch(':id/pay-order')
  @UseGuards(AuthGuard)
  payOrder(@Param('id', ParseIntPipe) id: number) {
    return this.PayOrderService.payOrder(id);
  }

  @Put(':id/change-shipping-address')
  @UseGuards(AuthGuard)
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
  @UseGuards(AuthGuard)
  changeInvoiceAddress(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: OrderUpdateInvoiceAddressDto,
  ) {
    return this.UpdateOrderInvoiceAddressService.updateOrderInvoiceAddress(
      id,
      data,
    );
  }

  @Get()
  @UseGuards(AuthGuard)
  getOrders(@Request() req) {
    return this.GetAllOrdersByUserService.getOrders(req.user['sub']);
  }
}
