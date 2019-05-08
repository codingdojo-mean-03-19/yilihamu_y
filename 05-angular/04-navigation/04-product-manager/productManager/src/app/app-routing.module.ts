import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromProducts from './products';

const routes: Routes = [
  {
    path: '',
    component: fromProducts.HomeComponent,
  },
  {
    path: 'products',
    component: fromProducts.ProductListComponent
  },
  {
    path: 'products/edit/:product_id',
    component: fromProducts.ProductEditComponent
  },

  {
    path: 'products/new',
    component: fromProducts.ProductNewComponent
  },
  {
    path: 'products/:product_id',
    component: fromProducts.ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
