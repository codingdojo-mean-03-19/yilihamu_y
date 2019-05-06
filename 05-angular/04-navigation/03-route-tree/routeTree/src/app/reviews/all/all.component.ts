import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  id: number;
  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit() {
    // note the use of .parent
    this.route.params.subscribe(params =>
    // console.log(params)
    this.id = params['id']
  )}

}
