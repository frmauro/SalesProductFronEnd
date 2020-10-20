import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";

import { Product } from "./models/Product";
import { PRODUCTS } from "./models/mockProduct";

import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'api/products';  // URL to web api

  constructor(
    private http: HttpClient, 
    private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the products
    //this.messageService.add('ProductService: fetched products');
    return of(PRODUCTS);
  }

  getProduct(id: Number): Observable<Product>{
    // TODO: send the message _after_ fetching the product id
    //this.messageService.add(`ProductService: fetched product id=${id}`);
     return of(PRODUCTS.find(product => product.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }


}
