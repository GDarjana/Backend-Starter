import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderItemCreateDto } from '../dto/order-item-create-dto';
import { OrderItem } from '../entity/order-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GetProductByIdService } from 'src/product/user-case/get-product-by-id.service';

Injectable();
export class CreateOrderItemService {
  constructor(
    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,
    private readonly getProductByIdService: GetProductByIdService,
  ) {}

  async createOrderItem(data: OrderItemCreateDto): Promise<OrderItem> {
    const product = await this.getProductByIdService.getProductById(
      data.productId,
    );
    if (!product) {
      throw new Error('Product not found with id ' + data.productId);
    }
    try {
      const orderItem = new OrderItem(data);
      orderItem.product = product;
      this.orderItemRepository.save(orderItem);
      return orderItem;
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating order item');
    }
  }
}
