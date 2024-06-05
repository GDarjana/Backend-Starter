import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Order } from '../entity/order.entity';

Injectable();
export class DeleteOrderItemService {
  constructor(private readonly orderRepository: Repository<Order>) {}

  async deleteOrderItem() {
    // Implementation here
  }
}
