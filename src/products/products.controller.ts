import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { ProductsDTO } from './dto/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsRepository: ProductsRepository) {}

  @Get('/')
  async getProducts() {
    return await this.productsRepository.getProducts();
  }

  @Get('/:id')
  async getProductById(@Param('id') id: string) {
    const product = await this.productsRepository.getProductById(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  @Post('/')
  async createProduct(@Body() body: ProductsDTO) {
    const savedProduct = await this.productsRepository.saveProduct(body);
    return { status: 'Product created', data: savedProduct };
  }

  @Put('/:id')
  async updateProduct(@Param('id') id: string, @Body() body: Partial<ProductsDTO>) {
    const existingProduct = await this.productsRepository.getProductById(id);
    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }

    const updatedProduct = await this.productsRepository.updateProduct(id, body);
    return { status: 'Product updated', data: updatedProduct };
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    const existingProduct = await this.productsRepository.getProductById(id);
    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }

    await this.productsRepository.deleteProduct(id);
    return {
      status: 'Product deleted',
      message: `Product with id ${id} has been deleted`,
    };
  }
}
