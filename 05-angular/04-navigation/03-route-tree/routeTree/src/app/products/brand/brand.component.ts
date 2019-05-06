import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  id: number;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit() {
    // note the use of .parent
    this.route.params.subscribe(params =>
    // console.log(params)
    this.id = params['brand']
  )}

}
