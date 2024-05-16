import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entity/order.entity';
import { OrderUpdateInvoiceAddressDto } from '../dto/order-update-invoice-address-dto';

Injectable();
export class UpdateOrderInvoiceAddressService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async updateOrderInvoiceAddress(
    id: number,
    data: OrderUpdateInvoiceAddressDto,
  ) {
    const order = await this.orderRepository.findOneBy({ id });
    order.updateInvoiceAddress(data);
    await this.orderRepository.save(order);
    return order;
  }
}
