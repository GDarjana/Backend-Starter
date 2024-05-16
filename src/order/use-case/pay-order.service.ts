import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entity/order.entity';

Injectable();
export class PayOrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRespository: Repository<Order>,
  ) {}

  async payOrder(id: number) {
    const order = await this.orderRespository.findOneBy({ id });
    order.payOrder();
    await this.orderRespository.save(order);
    return order;
  }
}
