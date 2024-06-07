/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateProductService } from '../user-case/create-product.service';
import { DeleteProductService } from '../user-case/delete-product.service';
import { GetAllProductService } from '../user-case/get-all-products.service';

import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ProductCreateDto } from '../dto/product-create-dto';

@Controller('products')
export class ProductController {
  constructor(
    private readonly CreateProductService: CreateProductService,
    private readonly DeleteProductService: DeleteProductService,
    private readonly GetAllProductsService: GetAllProductService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  createProduct(@Body() data: ProductCreateDto) {
    return this.CreateProductService.createProduct(data);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  deleteProduct(@Param('id') id: number) {
    return this.DeleteProductService.delete(id);
  }

  @Get()
  getAllProduct() {
    return this.GetAllProductsService.getAllProducts();
  }
}
