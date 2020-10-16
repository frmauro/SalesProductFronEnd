import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { Product } from "./models/Product";
import { PRODUCTS } from "./models/mockProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }


}
