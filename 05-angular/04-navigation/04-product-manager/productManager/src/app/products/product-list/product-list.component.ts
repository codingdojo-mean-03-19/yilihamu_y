import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from '../../models';
import { ProductService } from '../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product;
  sub: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.sub = this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSelect(product: Product) {
    console.log('selecting product', product);

    this.selectedProduct = this.selectedProduct === product ? null : product;

  }

  onCreate(product: Product) {
    console.log('creating product', product);
    this.productService.createProduct(product).subscribe(createdProduct => {
      this.products.push(createdProduct);
    })
    // this.products.push(product);
  }

  onDelete(event: Event, product: Product) {
    event.stopPropagation();

    this.productService.removeProduct(product._id).subscribe(removedProduct => {
      console.log('deleting product', removedProduct);

      this.products = this.products.filter(p => p._id !== removedProduct._id);
    });
  }

  onUpdate(event: Event) {
    event.stopPropagation();
  }



}
