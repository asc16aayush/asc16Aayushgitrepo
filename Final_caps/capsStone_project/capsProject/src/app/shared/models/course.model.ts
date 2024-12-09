// src/app/models/course.model.ts

// export interface Course {
//   courseId: string;
//   name: string;
//   startDate: string;
//   duration: number;
//   description: string;
//   assignedTo: string;  
// }

// src/app/shared/models/course.model.ts
export interface Author {
  authorId: string;
  name?: string;
  email?: string;
  phone?: string;
  biography?: string;
}


export interface Course {
  courseId?: string;
  name: string;
  startDate: string;
  duration: number;
  description: string;
  assignedTo: Author;  // assignedTo is an Author object
}
