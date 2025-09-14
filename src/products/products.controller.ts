import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { ProductsDTO } from './dto/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsRepository: ProductsRepository) {}

  @Get('/')
  getProducts() {
    return this.productsRepository.getProducts();
  }

  @Post('/')
  createProduct(@Body() body: ProductsDTO) {
    console.log(body);
    this.productsRepository.saveProduct(body);
    return { status: 'Product created', data: { ...body } };
  }
}
