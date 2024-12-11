

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private apiUrl = 'http://localhost:8080/api/author'; 

  constructor(private http: HttpClient) {}


  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.apiUrl);
  }

 
  getAuthorById(authorId: string): Observable<Author> {
    return this.http.get<Author>(`${this.apiUrl}/${authorId}`);
  }

  
  saveAuthor(author: Author): Observable<Author> {
    if (author.authorId) {
      return this.http.put<Author>(`${this.apiUrl}/${author.authorId}`, author);
    } else {
      return this.http.post<Author>(this.apiUrl, author);
    }
  }

  deleteAuthor(authorId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${authorId}`);
  }
}
