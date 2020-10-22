import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Product } from "../../models/Product";
import { ProductStatus } from "../../models/ProductStatus";
import { ProductService } from "../../product.service";
import { ProductDetailComponent } from 'src/app/product-detail/product-detail.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Input() product: Product;
  status = ProductStatus;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {
    this.product = { id: 0, description: '', amount: 0, price: '', status: ProductStatus.Active };
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
