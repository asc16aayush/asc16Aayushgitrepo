import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private apiUrl = 'http://localhost:8080/api/review';  // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Create or update a review
  createOrUpdateReview(review: Review): Observable<Review> {
    if (review.rId) {
      return this.http.put<Review>(`${this.apiUrl}/${review.rId}`, review);  // Update if rId exists
    } else {
      return this.http.post<Review>(this.apiUrl, review);  // Create if rId is undefined
    }
  }

  // Get all reviews
  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl);
  }

  // Delete review by ID
  deleteReview(rId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${rId}`);
  }
}
