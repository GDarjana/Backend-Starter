import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '@src/product/entity/product.entity';

Injectable();
export class GetProductByIdService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async getProductById(id: number) {
    return await this.productRepository.findOneBy({ id });
  }
}
