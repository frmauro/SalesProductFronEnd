import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from "./product/product.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { CreateComponent } from "./product/create/create.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductComponent },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
