import { Component } from '@angular/core';
import { AuthorsService } from '../../shared/services/authors.service';
import { Author } from '../../shared/models/author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
  authors: Author[] = [];
  newAuthor: Author = {
    id: '',
    name: '',
    bio: '',
    email: '',
  };

  constructor(private authorsService: AuthorsService) {
    // Subscribe to authors observable
    this.authorsService.authors$.subscribe((data) => {
      this.authors = data;
    });
  }

  addAuthor() {
    if (!this.newAuthor.name || !this.newAuthor.bio || !this.newAuthor.email) {
      alert('All fields are required.');
      return;
    }

    this.newAuthor.id = 'A' + (1000 + this.authors.length + 1).toString();
    this.authorsService.addAuthor({ ...this.newAuthor });
    this.resetForm();
  }

  deleteAuthor(authorId: string) {
    this.authorsService.deleteAuthor(authorId);
  }

  resetForm() {
    this.newAuthor = {
      id: '',
      name: '',
      bio: '',
      email: '',
    };
  }
}
