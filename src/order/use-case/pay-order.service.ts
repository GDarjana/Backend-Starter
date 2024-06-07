import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '@src/order/entity/order.entity';

Injectable();
export class PayOrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRespository: Repository<Order>,
  ) {}

  async payOrder(id: number, userId: number) {
    const order = await this.orderRespository.findOne({
      where: { customer: { id: userId }, status: Order.OrderStatus.InCart },
    });
    order.payOrder();
    await this.orderRespository.save(order);
    return order;
  }
}
