/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Controller('products')
export class ProductsController {
  constructor(private productsRepository: ProductsRepository) {}

  @Get('/')
  getProducts() {
    return this.productsRepository.getProducts();
  }

  @Post('/')
  createProduct(@Body() body) {
    console.log(body);
    this.productsRepository.saveProduct(body);
    return { status: 'Product created', data: { ...body } };
  }
}
