export interface Review {
  rId?: string;           // Optional because the backend generates the ID
  review: string;         // Review text
  rating: number;         // Rating from 1 to 5
  learner: {
    learnerId: string;    // Learner ID
  };
  course: {
    courseId: string;     // Course ID
  };
}
