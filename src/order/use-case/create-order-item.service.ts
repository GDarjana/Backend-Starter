import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderItemCreateDto } from '../dto/order-item-create-dto';
import { OrderItem } from '../entity/order-item.entity';
import { InjectRepository } from '@nestjs/typeorm';

Injectable();
export class CreateOrderItemService {
  constructor(
    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,
  ) {}

  async createOrderItem(data: OrderItemCreateDto) {
    try {
      const orderItem = new OrderItem(data);
      console.log(orderItem);
      return this.orderItemRepository.save(orderItem);
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating order item');
    }
  }
}
