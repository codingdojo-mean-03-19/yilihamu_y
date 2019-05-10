import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

import { Note } from '../note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private readonly base = '/api/notes';
  constructor(private readonly http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.base);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.base, note);
  }
}
