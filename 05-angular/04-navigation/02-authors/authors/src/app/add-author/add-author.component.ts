import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Author } from '../author.model';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  author = new Author();

  @Output()
  createAuthor = new EventEmitter<Author>();

  constructor(private readonly authorService: AuthorService, private readonly router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('Submitting', this.author);
    this.authorService.postAuthor(this.author)
      .subscribe(author => {
        this.router.navigateByUrl('/')
      });
    form.reset();
  }

}
