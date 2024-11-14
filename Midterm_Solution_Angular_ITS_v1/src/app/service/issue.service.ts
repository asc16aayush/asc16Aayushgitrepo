import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../models/issue.model';  

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private apiUrl = 'http://localhost:3000/issues';

  constructor(private http: HttpClient) {}

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.apiUrl);  
  }

  getIssue(id: number): Observable<Issue> {
    return this.http.get<Issue>(`${this.apiUrl}/${id}`);  
  }

  addIssue(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(this.apiUrl, issue);  
  }

  updateIssue(id: number, issue: Issue): Observable<Issue> {
    return this.http.put<Issue>(`${this.apiUrl}/${id}`, issue);  
  }

  deleteIssue(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);  
  }
}
