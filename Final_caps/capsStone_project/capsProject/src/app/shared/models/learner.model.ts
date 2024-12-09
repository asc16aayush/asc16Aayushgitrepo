// Learner interface
// export interface Learner {
//   learnerId: string;
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
//   courseAssigned: string;
// }
// Learner model
export interface Learner {
  learnerId: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  courseAssigned: { courseId: string }; // Wrap courseAssigned in an object with courseId field
}

