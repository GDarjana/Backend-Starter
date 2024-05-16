/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { CreateOrderService } from '../use-case/create-order.service';
import { Body, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { OrderCreateDto } from '../dto/order-create-dto';
import { PayOrderService } from '../use-case/pay-order.service';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly CreateOrderService: CreateOrderService,
    private readonly PayOrderService: PayOrderService,
  ) {}

  @Post()
  createOrder(@Body() data: OrderCreateDto) {
    return this.CreateOrderService.createOrder(data);
  }

  @Patch(':id/pay-order')
  payOrder(@Param('id', ParseIntPipe) id: number) {
    return this.PayOrderService.payOrder(id);
  }
}
