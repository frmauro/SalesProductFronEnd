import { Component, OnInit } from '@angular/core';
import { Product } from "../models/Product";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.productService.getProducts()
        .subscribe((productsjson) => {
            this.products = productsjson;
        });
  }

}
