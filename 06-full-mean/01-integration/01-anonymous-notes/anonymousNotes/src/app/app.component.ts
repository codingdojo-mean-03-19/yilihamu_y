import { Component, OnInit } from '@angular/core';

import { NoteService } from './services';
import { Note } from './note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Anonymous Notes';
  notes: Note[] = [];

  constructor(private noteService: NoteService){ }

  ngOnInit(): void {
    this.getNotes();
  }

  createNote(note: Note){
    this.noteService.createNote(note)
    .subscribe(createdNote => {
      this.notes = [createdNote, ...this.notes];
    })
  }

  getNotes() {
    this.noteService.getNotes()
    .subscribe(notes => {
      this.notes = notes;
    })
  }
}
