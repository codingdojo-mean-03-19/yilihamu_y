import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from "./task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: any;
  task: any;
  constructor(private _httpService: HttpService){
    this.task = new Task();
  }

  ngOnInit() {
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got data", data);
      this.tasks = data;
    });
  }

  info(task) {
    this.task = task;
  }

}
