import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderCreateDto } from '../dto/order-create-dto';
import { Order } from '../entity/order.entity';

Injectable();
export class CreateOrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async createOrder(data: OrderCreateDto) {
    try {
      const order = new Order(data);
      return this.orderRepository.save(order);
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating order');
    }
  }
}
