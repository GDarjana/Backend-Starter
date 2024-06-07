import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ProductController } from '@src/product/controller/product.controller';
import { CreateProductService } from '@src/product/use-case/create-product.service';
import { Product } from '@src/product/entity/product.entity';
import { Module } from '@nestjs/common';
import { DeleteProductService } from '@src/product/use-case/delete-product.service';
import { GetAllProductService } from '@src/product/use-case/get-all-products.service';
import { GetProductByIdService } from '@src/product/use-case/get-product-by-id.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [
    CreateProductService,
    DeleteProductService,
    GetAllProductService,
    GetProductByIdService,
  ],
})
export class ProductModule {}
