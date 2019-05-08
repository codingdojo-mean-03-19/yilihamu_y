import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';

import { Product } from '../../models';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product = new Product();

  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('product_id')),
        switchMap(id => this.productService.getProduct(id))
      )
      .subscribe(product => (this.product = product));
  }

  onUpdate(event: Event) {
    event.preventDefault();
    console.log('Updating product', this.product);
    this.productService.updateProduct(this.product)
      .subscribe(product => {
        console.log('update product', product);
        this.router.navigateByUrl('/products');
      })
  }

}
