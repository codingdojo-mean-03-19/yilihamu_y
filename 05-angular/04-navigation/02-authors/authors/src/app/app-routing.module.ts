import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './authors/authors.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { ShowAuthorComponent } from './show-author/show-author.component';

const routes: Routes = [
  {path: '', component: AuthorsComponent},
  {path: 'author/new', component: AddAuthorComponent},
  {path: 'author/:author_id', component: ShowAuthorComponent},
  {path: 'author/edit/:author_id', component: EditAuthorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
