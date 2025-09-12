/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
@Injectable()
export class ProductsRepository {
  private products: any[] = [];
  saveProduct(product: any) {
    this.products.push(product);
  }
  getProducts() {
    return this.products;
  }
}
