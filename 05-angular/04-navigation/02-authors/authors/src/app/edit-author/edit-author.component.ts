import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Author } from '../author.model';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  edit_Author = new Author();

  @Output()
  editedAuthor = new EventEmitter<Author>();

  @Input()
  author: Author;

  constructor(
    private readonly authorService: AuthorService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('author_id')),
        switchMap(id => this.authorService.getAuthor(id))
      )
      .subscribe(author => (this.author = author));
  }
  onUpdate(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('Updating author', this.author);
    this.authorService.getUpdate(this.author)
      .subscribe(author => {
        console.log('update author', author);
        this.router.navigateByUrl('/')
      })
    form.reset();
  }

}
