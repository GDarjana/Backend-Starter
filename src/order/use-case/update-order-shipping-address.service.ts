import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '@src/order/entity/order.entity';
import { OrderUpdateShippingAddressDto } from '@src/order/dto/order-update-shipping-address-dto';

Injectable();
export class UpdateOrderShippingAddressService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async updateOrderShippingAddress(
    id: number,
    data: OrderUpdateShippingAddressDto,
  ) {
    const order = await this.orderRepository.findOneBy({ id });
    order.updateShippingAddress(data);
    return await this.orderRepository.save(order);
  }
}
