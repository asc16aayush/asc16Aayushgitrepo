export interface Review {
  rId?: string;           
  review: string;        
  rating: number;         
  learner: {
    learnerId: string;    
  };
  course: {
    courseId: string;     
  };
}
