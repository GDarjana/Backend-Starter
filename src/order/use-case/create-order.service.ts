import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderCreateDto } from '../dto/order-create-dto';
import { Order } from '../entity/order.entity';
import { CreateOrderItemService } from './create-order-item.service';
import { GetUserByIdService } from 'src/user/use-case/get-user-by-id.service';
import { OrderItem } from '../entity/order-item.entity';

Injectable();
export class CreateOrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly createOrderItemService: CreateOrderItemService,
    private readonly getUserByIdService: GetUserByIdService,
  ) {}

  async createOrder(userId: number, data: OrderCreateDto) {
    let order: Order;
    let orderItem: OrderItem;
    try {
      const user = await this.getUserByIdService.getUserById(userId);
      order = await this.orderRepository.findOne({
        where: { customer: { id: userId }, status: Order.OrderStatus.InCart },
      });
      if (!order) {
        order = new Order(data);
        order.customer = user;
      }
      orderItem = order.getOrderItemWithProductId(data.productId);
      if (!orderItem) {
        orderItem = await this.createOrderItemService.createOrderItem(data);
        orderItem.updatePrice();
        order.items.push(orderItem);
      } else {
        orderItem.addQuantity(data.quantity);
      }
      return this.orderRepository.save(order);
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating order');
    }
  }
}
