

// export interface Course {
//   courseId: string;
//   name: string;
//   startDate: string;
//   duration: number;
//   description: string;
//   assignedTo: string;  
// }


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
  assignedTo: Author;  
}
