/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { CreateOrderService } from '../use-case/create-order.service';
import { Body, Post } from '@nestjs/common';
import { OrderCreateDto } from '../dto/order-create-dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly CreateOrderService: CreateOrderService) {}

  @Post()
  createOrder(@Body() data: OrderCreateDto) {
    console.log(data);
    return this.CreateOrderService.createOrder(data);
  }
}
