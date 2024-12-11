import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../models/review.model';  
import { Course } from '../models/course.model';  
import { Learner } from '../models/learner.model'; 

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private apiUrl = 'http://localhost:8080/api/review';  
  private coursesUrl = 'http://localhost:8080/api/course';
  private learnersUrl = 'http://localhost:8080/api/learner';

  constructor(private http: HttpClient) {}

  
  createOrUpdateReview(review: Review): Observable<Review> {
    if (review.rId) {
      return this.http.put<Review>(`${this.apiUrl}/${review.rId}`, review);  
    } else {
      return this.http.post<Review>(this.apiUrl, review); 
    }
  }

  
  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl);
  }


  deleteReview(rId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${rId}`);
  }


  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl);
  }

 
  getAllLearners(): Observable<Learner[]> {
    return this.http.get<Learner[]>(this.learnersUrl);
  }
}
