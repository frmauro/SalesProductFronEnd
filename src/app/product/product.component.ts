import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductStatus } from '../models/ProductStatus';

import { ProductService } from "../product.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[];

  selectedProduct: Product;
  onSelect(product: Product): void{
    this.selectedProduct = product;
  }

  product: Product = {
    id: 1,
    description: 'Product 001',
    amount: '90',
    price: '75',
    status: ProductStatus.Active
  }

  constructor(private productService: ProductService) { }

    ngOnInit(): void {
      this.getProducts();
    }

    getProducts(): void{
      this.productService.getProducts()
          .subscribe(products => this.products = products);
    }

}
