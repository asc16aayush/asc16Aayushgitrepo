import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../shared/services/reviews.service';
import { Review } from '../../shared/models/review.model';  
import { Course } from '../../shared/models/course.model';  
import { Learner } from '../../shared/models/learner.model';  

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  reviewData: Review = {
    rId: '',
    review: '',
    rating: 0,
    learner: { learnerId: '' },
    course: { courseId: '' }
  };
  isEditMode: boolean = false;
  courses: Course[] = [];
  learners: Learner[] = [];
  searchText: string = ''; 

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.getAllReviews();
    this.getAllCourses();
    this.getAllLearners();
  }

  
  getAllReviews(): void {
    this.reviewsService.getAllReviews().subscribe((data) => {
      this.reviews = data;
    });
  }

  
  getAllCourses(): void {
    this.reviewsService.getAllCourses().subscribe((data) => {
      this.courses = data;
    });
  }

 
  getAllLearners(): void {
    this.reviewsService.getAllLearners().subscribe((data) => {
      this.learners = data;
    });
  }

  
  submitReview(): void {
    if (this.reviewData.review && this.reviewData.rating > 0 && this.reviewData.learner.learnerId && this.reviewData.course.courseId) {
      this.reviewsService.createOrUpdateReview(this.reviewData).subscribe(
        (response) => {
          console.log('Review Submitted:', response);
          this.getAllReviews();
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


  editReview(review: Review): void {
    this.isEditMode = true;
    this.reviewData = { ...review };
  }

  
  updateReview(): void {
    if (this.reviewData.rId) {
      this.reviewsService.createOrUpdateReview(this.reviewData).subscribe(
        (response) => {
          console.log('Review Updated:', response);
          this.getAllReviews();
          this.resetForm();
        },
        (error) => {
          console.error('Error updating review:', error);
        }
      );
    }
  }

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

 
  deleteReview(rId: string): void {
    this.reviewsService.deleteReview(rId).subscribe(
      () => {
        console.log('Review Deleted');
        this.getAllReviews();
      },
      (error) => {
        console.error('Error deleting review:', error);
      }
    );
  }


  filteredReviews(): Review[] {
    if (!this.searchText) {
      return this.reviews;
    }
    return this.reviews.filter((review) =>
      review.review.toLowerCase().includes(this.searchText.toLowerCase()) ||
      review.learner.learnerId.toLowerCase().includes(this.searchText.toLowerCase()) ||
      review.course.courseId.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }


}
