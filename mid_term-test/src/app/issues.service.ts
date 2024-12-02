import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from './model';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private apiUrl = 'http://localhost:3000/issues';  // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.apiUrl);
  }

  getIssueById(id: string): Observable<Issue> {
    return this.http.get<Issue>(`${this.apiUrl}/${id}`);
  }

  createIssue(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(this.apiUrl, issue);
  }

  updateIssue(id: string, issue: Issue): Observable<Issue> {
    return this.http.put<Issue>(`${this.apiUrl}/${id}`, issue);
  }

  deleteIssue(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}



