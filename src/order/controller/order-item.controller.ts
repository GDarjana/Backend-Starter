/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateOrderItemService } from '../use-case/create-order-item.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { OrderItemCreateDto } from '../dto/order-item-create-dto';

@Controller('order-items')
export class OrderItemsController {
  constructor(
    private readonly CreateOrderItemService: CreateOrderItemService,
  ) {}
  @UseGuards(AuthGuard)
  @Post()
  createOrderItem(@Body() data: OrderItemCreateDto) {
    return this.CreateOrderItemService.createOrderItem(data);
  }
}
