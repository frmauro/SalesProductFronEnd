import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductStatus } from '../models/ProductStatus';

import { PRODUCTS } from "../models/mockProduct";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = PRODUCTS;

  product: Product = {
    id: 1,
    description: 'Product 001',
    amount: '90',
    price: '75',
    status: ProductStatus.Active
  }

  constructor() { }

  ngOnInit(): void {
  }

}
