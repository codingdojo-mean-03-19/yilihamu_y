import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: NoteListComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
