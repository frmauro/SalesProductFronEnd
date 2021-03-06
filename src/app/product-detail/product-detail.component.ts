import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Product } from "../models/Product";
import { ProductStatus } from "../models/ProductStatus";
import { ProductService } from "../product.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;  
  status = ProductStatus;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }

  save(): void {
    //console.log(this.product);
    this.product.amount = Number(this.product.amount);
    this.productService.updateProduct(this.product).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
