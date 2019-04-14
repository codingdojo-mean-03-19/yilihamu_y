import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  headOne : string;
  headTwo : string;
  listOne : string[];
  headThree : string;
  listTwo : string;

  ngOnInit() {
    this.headOne = "Restful Tasks API";
    this.headTwo = "All the tasks:";
    this.listOne = [
      "Learn Angular - Understand Services",
       "Manipulate the DOM - Use the 'for of' loop",
       "Bind events - Parentheses indicate events"
      ];
    this.headThree = "The third task:";
    this.listTwo = "Bind events - Parentheses indicate events";
  }
}
