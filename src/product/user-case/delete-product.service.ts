import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entity/product.entity';
import { Repository } from 'typeorm';

Injectable();
export class DeleteProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async delete(id: number) {
    try {
      const product = await this.productRepository.findOneBy({ id });
      product.makeUnavailable();
      await this.productRepository.save(product);
      return product;
    } catch (error) {
      throw new Error('Error while deleting product');
    }
  }
}
