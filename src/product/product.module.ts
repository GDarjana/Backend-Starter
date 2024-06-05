import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ProductController } from './controller/product.controller';
import { CreateProductService } from './user-case/create-product.service';
import { Product } from './entity/product.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [CreateProductService],
})
export class ProductModule {}
