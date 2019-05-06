import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  id: number;
  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit() {
    // note the use of .parent
    this.route.params.subscribe(params =>
    // console.log(params)
    this.id = params['id']
  )}

}
