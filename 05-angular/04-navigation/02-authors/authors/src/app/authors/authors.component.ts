import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorService } from '../author.service';
import { Subscription } from 'rxjs';
import { Author } from '../author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = [];
  sub: Subscription;
  selectedAuthor: Author;

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.sub = this.authorService.getAuthors().subscribe(authors => {
      console.log(authors);
      this.authors = authors;
    });
  }

  ngOnDestroy(): void {
    console.log('ng on destroy');
    this.sub.unsubscribe();
  }

  onDelete(event: Event, author: Author) {
    event.stopPropagation();
    console.log("Author id", author._id);
    this.authorService.removeAuthor(author._id).subscribe(removedAuthor => {
      console.log("deleted author", removedAuthor);
      this.authors = this.authors.filter(author => author._id !== removedAuthor._id);
    })
  }
  onSelect(author: Author) {
    console.log('Selected Author', author);
    this.selectedAuthor = this.selectedAuthor === author ? null : author;
  }

}
