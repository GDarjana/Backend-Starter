/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateProductService } from '../user-case/create-product.service';

import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ProductCreateDto } from '../dto/product-create-dto';

@Controller('products')
export class ProductController {
  constructor(private readonly CreateProductService: CreateProductService) {}

  @UseGuards(AuthGuard)
  @Post()
  createOrder(@Body() data: ProductCreateDto) {
    return this.CreateProductService.createProduct(data);
  }
}
