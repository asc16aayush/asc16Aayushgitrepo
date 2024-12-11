
export interface Learner {
  learnerId: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  courseAssigned: { courseId: string }; 
}

