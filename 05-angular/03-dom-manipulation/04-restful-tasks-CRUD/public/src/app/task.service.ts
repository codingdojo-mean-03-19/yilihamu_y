import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { Task } from './models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly base = '/tasks';
  constructor(private readonly http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.base);
  }

  getTask(id: string): Observable<Task>{
    console.log(id);
    return this.http.get<Task>(`${this.base}/${id}`);
  }

  createTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.base, task);
  }

  removeTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.base}/${id}`);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.base}/${task.id}`, task);
  }
}
