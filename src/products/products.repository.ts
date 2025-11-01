import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsDTO } from './dto/products.dto';
import { ProductsEntity } from './products.entity';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productsRepository: Repository<ProductsEntity>,
  ) {}

  async saveProduct(productData: ProductsDTO): Promise<ProductsEntity> {
    const product = this.productsRepository.create({
      ...productData,
      dataCriacao: new Date(),
      dataAtualizacao: new Date(),
    });
    return await this.productsRepository.save(product);
  }

  async getProducts(): Promise<ProductsEntity[]> {
    return await this.productsRepository.find();
  }

  async getProductById(id: string): Promise<ProductsEntity | null> {
    return await this.productsRepository.findOne({ where: { id } });
  }

  async updateProduct(id: string, productData: Partial<ProductsDTO>): Promise<ProductsEntity> {
    await this.productsRepository.update(id, {
      ...productData,
      dataAtualizacao: new Date(),
    });
    const updated = await this.getProductById(id);
    if (!updated) {
      throw new Error('Product not found after update');
    }
    return updated;
  }

  async deleteProduct(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
