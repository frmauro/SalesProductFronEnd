import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { Product } from "./models/Product";
import { PRODUCTS } from "./models/mockProduct";

import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the products
    this.messageService.add('ProductService: fetched products');
    return of(PRODUCTS);
  }

  getProduct(id: Number): Observable<Product>{
    // TODO: send the message _after_ fetching the product id
    this.messageService.add(`ProductService: fetched product id=${id}`);
     return of(PRODUCTS.find(product => product.id === id));
  }


}
