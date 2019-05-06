import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {
  id: number;
  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit() {
    // note the use of .parent
    this.route.params.subscribe(params =>
    // console.log(params)
    this.id = params['id']
  )}

}
