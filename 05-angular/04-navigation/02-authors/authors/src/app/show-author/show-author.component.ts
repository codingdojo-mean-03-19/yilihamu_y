import { Component, OnInit, Input } from '@angular/core';
import { AuthorService } from '../author.service';
import { Author } from '../author.model';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent implements OnInit {

  @Input()
  author: Author;

  constructor(private readonly authorService: AuthorService, private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('author_id')),
        switchMap(id => this.authorService.getAuthor(id))
      )
      .subscribe(author => (this.author = author))
  }

}
