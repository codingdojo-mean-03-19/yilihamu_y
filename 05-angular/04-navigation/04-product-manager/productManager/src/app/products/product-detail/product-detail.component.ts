import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Product } from '../../models';

import { ProductService } from '../../services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input()
  product: Product;

  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('product_id')),
        switchMap(id => this.productService.getProduct(id))
      )
      .subscribe(product => (this.product = product));
  }

}
