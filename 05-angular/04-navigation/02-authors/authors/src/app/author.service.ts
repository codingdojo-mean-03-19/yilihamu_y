import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

import { Author } from './author.model';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private readonly base = 'http://localhost:8000/api/authors';

  constructor(private readonly http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.base);
  }
  postAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.base, author);
  }
  removeAuthor(id: String): Observable<Author> {
    return this.http.delete<Author>(`${this.base}/${id}`);
  }
  getAuthor(id: String): Observable<Author> {
    return this.http.get<Author>(`${this.base}/${id}`);
  }
  getUpdate(author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.base}/${author._id}`, author);
  }

}
