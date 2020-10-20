import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductStatus } from '../models/ProductStatus';

import { ProductService } from "../product.service";
import { MessageService } from "../message.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[];
    
  constructor(
    private messageService: MessageService, 
    private productService: ProductService
    ) { }

    ngOnInit(): void {
      this.getProducts();
    }

    getProducts(): void{
      this.productService.getProducts()
          .subscribe(products => this.products = products);
    }

}
