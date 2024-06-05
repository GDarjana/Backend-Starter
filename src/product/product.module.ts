import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ProductController } from './controller/product.controller';
import { CreateProductService } from './user-case/create-product.service';
import { Product } from './entity/product.entity';
import { Module } from '@nestjs/common';
import { DeleteProductService } from './user-case/delete-product.service';
import { GetAllProductService } from './user-case/get-all-products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [CreateProductService, DeleteProductService, GetAllProductService],
})
export class ProductModule {}
