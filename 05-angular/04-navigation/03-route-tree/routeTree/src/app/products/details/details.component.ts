import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit() {
    // note the use of .parent
    this.route.params.subscribe(params =>
    // console.log(params)
    this.id = params['id']
  )}

}
