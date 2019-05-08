import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from '../../services';
import { Product } from '../../models';


@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  product = new Product();

  @Output()
  createProduct = new EventEmitter<Product>();

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();

    // this.books.push(form.value);
    this.productService.createProduct(this.product).subscribe(product => {
      console.log(product);

      this.router.navigateByUrl('/products');
    });


    // this.createProduct.emit(form.value);

    // this.product = new Product();
    // form.reset();
  }

  cancel() {
    this.router.navigateByUrl('/products');
  }

}
