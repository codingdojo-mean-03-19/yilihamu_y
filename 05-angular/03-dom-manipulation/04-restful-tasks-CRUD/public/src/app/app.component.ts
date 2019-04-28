import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

// import {TASKS} from './data';
import {Task} from './models';
import { TaskService } from './task.service';
import { bloomHasToken } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  task = new Task();
  tasks:Task[] = [];
  clicked: boolean = false;
  showMe: boolean;
  sub: Subscription;
  // tasks: Task[] = TASKS;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.sub = this.taskService.getTasks().subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks;
    });
  }

  ngOnDestroy(): void {
    console.log('ng on destroy');
    this.sub.unsubscribe();
  }

  onSubmit(event: Event, form: NgForm)  {
    event.preventDefault();
    console.log('submitting form', this.task);
    // this.tasks.push(this.task);
    this.task = new Task();
    form.reset();
    // console.log('tasks ', this.tasks);
  }

  onCreate(task:Task){
    console.log('creating task', task);
    this.taskService.createTask(task)
    .subscribe(createdTask => {
      console.log(createdTask)
      this.tasks.push(createdTask);
    })
  }

  onDelete(event: Event, task:Task){
    event.stopPropagation();
    console.log(task.id);
    this.taskService.removeTask(task.id).subscribe(removedTask => {
      console.log('deleting task', removedTask);
      this.tasks = this.tasks.filter(task => task.id !== removedTask.id);
    })
  }

  onEdit(event: Event, task:Task){
    event.stopPropagation();

    this.clicked = this.clicked === true ? false : true;

    this.taskService.updateTask(task).subscribe(updateTask => {
      console.log('updated', updateTask);
      //this.tasks = this.tasks.
    })
  }

}
