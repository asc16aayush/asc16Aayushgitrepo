import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Learner } from '../models/learner.model';


@Injectable({
  providedIn: 'root'
})
export class LearnersService {

 
  private apiUrl = 'http://localhost:8080/api/learner';  

  constructor(private http: HttpClient) { }

 
  getAllLearners(): Observable<Learner[]> {
    return this.http.get<Learner[]>(this.apiUrl);
  }

  
  getLearnerById(learnerId: string): Observable<Learner> {
    return this.http.get<Learner>(`${this.apiUrl}/${learnerId}`);
  }

  
  saveLearner(learner: Learner): Observable<Learner> {
    return this.http.post<Learner>(this.apiUrl, learner);
  }

 
  updateLearner(learnerId: string, learner: Learner): Observable<Learner> {
    return this.http.put<Learner>(`${this.apiUrl}/${learnerId}`, learner);
  }

 
  deleteLearner(learnerId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${learnerId}`);
  }
}
