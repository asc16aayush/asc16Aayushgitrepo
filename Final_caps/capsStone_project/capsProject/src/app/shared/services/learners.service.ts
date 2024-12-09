import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Learner } from '../models/learner.model';


@Injectable({
  providedIn: 'root'
})
export class LearnersService {

  // Hardcoded API URL (instead of using environment.ts)
  private apiUrl = 'http://localhost:8080/api/learner';  // Replace this with your actual backend API URL

  constructor(private http: HttpClient) { }

  // Get all learners
  getAllLearners(): Observable<Learner[]> {
    return this.http.get<Learner[]>(this.apiUrl);
  }

  // Get a learner by ID
  getLearnerById(learnerId: string): Observable<Learner> {
    return this.http.get<Learner>(`${this.apiUrl}/${learnerId}`);
  }

  // Create or update a learner
  saveLearner(learner: Learner): Observable<Learner> {
    return this.http.post<Learner>(this.apiUrl, learner);
  }

  // Update a learner by ID
  updateLearner(learnerId: string, learner: Learner): Observable<Learner> {
    return this.http.put<Learner>(`${this.apiUrl}/${learnerId}`, learner);
  }

  // Delete a learner by ID
  deleteLearner(learnerId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${learnerId}`);
  }
}
