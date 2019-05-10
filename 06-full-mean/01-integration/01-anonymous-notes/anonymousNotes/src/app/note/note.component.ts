import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NoteService } from '../services';
import { Note } from '../note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note: Note = new Note();

  @Output()
  newNote = new EventEmitter<Note>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();

    // this.books.push(form.value);
    this.note = form.value;

    this.newNote.emit(this.note);

    this.note = new Note();
    form.reset();
  }

}
