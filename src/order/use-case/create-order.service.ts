import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderCreateDto } from '../dto/order-create-dto';
import { Order } from '../entity/order.entity';
import { CreateOrderItemService } from './create-order-item.service';
import { GetUserByIdService } from 'src/user/use-case/get-user-by-id.service';

Injectable();
export class CreateOrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly createOrderItemService: CreateOrderItemService,
    private readonly getUserByIdService: GetUserByIdService,
  ) {}

  async createOrder(userId: number, data: OrderCreateDto) {
    try {
      const user = await this.getUserByIdService.getUserById(userId);
      const order = new Order(data);
      order.customer = user;
      for (const item of data.items) {
        const orderItem = await this.createOrderItemService.createOrderItem(
          item,
        );
        orderItem.initPrice();
        order.items.push(orderItem);
      }
      return this.orderRepository.save(order);
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating order');
    }
  }
}
