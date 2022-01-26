import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from "./models/Product";
import { PRODUCTS } from "./models/mockProduct";

import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private productsUrl = 'http://localhost:5158/';  // URL to web api
  //private productsUrl = 'http://localhost:8087/Product';  // URL to web api
  //private productsUrl = 'http://192.168.49.2:31003/product';  // URL to web api in local Kubernetes
  //private productsUrl = 'http://192.168.49.2/product';  // URL to web api in local Kubernetes
  //private productsUrl = 'http://localhost/product';  // URL to web api in local Kubernetes


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the products
    //this.messageService.add('ProductService: fetched products');
    //return of(PRODUCTS);
    let urlfull = this.productsUrl+"getAllProduct";
    return this.http.get<Product[]>(urlfull)
    .pipe(
      tap(_ => this.log('fetched products')),
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  getProduct(id: Number): Observable<Product>{
    // TODO: send the message _after_ fetching the product id
    //this.messageService.add(`ProductService: fetched product id=${id}`);
     //return of(PRODUCTS.find(product => product.id === id));
     const url = `${this.productsUrl}GetProductById/${id}`;
     return this.http.get<Product>(url).pipe(
      tap(_ => this.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
     );
  }

  /** PUT: update the product on the server */
  updateProduct(product: Product): Observable<any> {
    //console.log(product);
    const url = `${this.productsUrl}UpdateProduct`;
    return this.http.put(url, product, this.httpOptions).pipe(
      tap(_ => this.log(`updated product id=${product.id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  /** POST: add a new product to the server */
addProduct(product: Product): Observable<Product> {
  const url = `${this.productsUrl}CreateProduct`;
  return this.http.post<Product>(url, product, this.httpOptions).pipe(
    tap((newProduct: Product) => this.log(`added product w/ id=${product.id}`)),
    catchError(this.handleError<Product>('addProduct'))
  );
}

  /** Log a ProductService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`productService: ${message}`);
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }


}
