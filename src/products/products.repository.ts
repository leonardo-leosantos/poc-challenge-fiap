import { Injectable } from '@nestjs/common';
import { ProductsDTO } from './dto/products.dto';
@Injectable()
export class ProductsRepository {
  private products: ProductsDTO[] = [];
  saveProduct(product: ProductsDTO) {
    this.products.push(product);
  }
  getProducts() {
    return this.products;
  }
}
