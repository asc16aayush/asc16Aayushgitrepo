import { Component } from '@angular/core';
import { Review } from '../../shared/models/review.model'; // Import the Review model
import { ReviewsService } from '../../shared/services/reviews.service'; // Import the service

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent {
  reviews: Review[] = []; // Define reviews as an array of Review objects

  constructor(private reviewsService: ReviewsService) {
    // Subscribe to the reviews data from the service
    this.reviewsService.reviews$.subscribe((data) => {
      this.reviews = data;
    });
  }

  addReview(reviewData: { reviewText: string; courseId: string; learnerId: string; rating: number }) {
    const newReview: Review = {
      id: 'RV' + (1000 + this.reviews.length + 1), // Auto-generate ID
      courseId: reviewData.courseId,
      learnerId: reviewData.learnerId,
      rating: reviewData.rating,
      comment: reviewData.reviewText, // Map reviewText to the comment field in Review
    };

    this.reviewsService.addReview(newReview); // Add review via service
  }

  deleteReview(reviewId: string) {
    this.reviewsService.deleteReview(reviewId); // Delete review via service
  }
}
