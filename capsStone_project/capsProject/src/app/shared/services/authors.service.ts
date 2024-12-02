import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  // BehaviorSubject to manage authors' state
  private authorsSubject = new BehaviorSubject<Author[]>([]);
  authors$ = this.authorsSubject.asObservable();

  // Add an author
  addAuthor(author: Author) {
    const currentAuthors = this.authorsSubject.getValue();
    this.authorsSubject.next([...currentAuthors, author]);
  }

  // Delete an author by ID
  deleteAuthor(authorId: string) {
    const currentAuthors = this.authorsSubject.getValue();
    this.authorsSubject.next(currentAuthors.filter((a) => a.id !== authorId));
  }

  // Get the current list of authors
  getAuthors(): Author[] {
    return this.authorsSubject.getValue();
  }
}
