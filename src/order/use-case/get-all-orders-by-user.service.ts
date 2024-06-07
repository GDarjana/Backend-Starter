import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entity/order.entity';
import { Repository } from 'typeorm';
import { GetUserByIdService } from 'src/user/use-case/get-user-by-id.service';

Injectable();
export class GetAllOrdersByUserService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly getUserByIdService: GetUserByIdService,
  ) {}

  async getOrders(userId: number): Promise<Order[]> {
    try {
      const user = await this.getUserByIdService.getUserById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      const orders = await this.orderRepository.find({
        where: { customer: { id: userId } },
      });
      console.log(orders);

      return await this.orderRepository.find({
        where: { customer: { id: userId } },
      });
    } catch (error) {
      console.log(error);
      throw new Error('Error while getting orders');
    }
  }
}
