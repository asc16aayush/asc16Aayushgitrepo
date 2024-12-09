import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../shared/services/reviews.service';
import { Review } from '../../shared/models/review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];  // Use Review model
  reviewData: Review = {   // Use Review model for the form data
    rId: '',
    review: '',
    rating: 0,
    learner: { learnerId: '' },
    course: { courseId: '' }
  };
  isEditMode: boolean = false; // Flag to toggle between Add/Edit mode

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.getAllReviews();
  }

  // Get all reviews
  getAllReviews(): void {
    this.reviewsService.getAllReviews().subscribe((data) => {
      this.reviews = data;
    });
  }

  // Submit new review
  submitReview(): void {
    if (this.reviewData.review && this.reviewData.rating > 0 && this.reviewData.learner.learnerId && this.reviewData.course.courseId) {
      this.reviewsService.createOrUpdateReview(this.reviewData).subscribe(
        (response) => {
          console.log('Review Submitted:', response);
          this.getAllReviews();  // Refresh the list after adding a review
          this.resetForm();
        },
        (error) => {
          console.error('Error submitting review:', error);
        }
      );
    } else {
      console.error('Please fill in all fields');
    }
  }

  // Edit an existing review
  editReview(review: Review): void {
    this.isEditMode = true;
    this.reviewData = { ...review };  // Copy review data into the form for editing
  }

  // Update the existing review
  updateReview(): void {
    if (this.reviewData.rId) {
      this.reviewsService.createOrUpdateReview(this.reviewData).subscribe(
        (response) => {
          console.log('Review Updated:', response);
          this.getAllReviews();  // Refresh the list after updating the review
          this.resetForm();
        },
        (error) => {
          console.error('Error updating review:', error);
        }
      );
    }
  }

  // Reset form after submitting or updating
  resetForm(): void {
    this.isEditMode = false;
    this.reviewData = {
      rId: '',
      review: '',
      rating: 0,
      learner: { learnerId: '' },
      course: { courseId: '' }
    };
  }

  // Delete review by ID
  deleteReview(rId: string): void {
    this.reviewsService.deleteReview(rId).subscribe(
      () => {
        console.log('Review Deleted');
        this.getAllReviews();  // Refresh the list after deletion
      },
      (error) => {
        console.error('Error deleting review:', error);
      }
    );
  }
}
