// src/app/services/courses.service.ts

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Course } from '../models/course.model';
// import { Author } from '../models/author.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class CoursesService {

//   private apiUrl = 'http://localhost:8080/api/course';  // Adjust with your backend URL

//   private authorsApiUrl = 'http://localhost:8080/api/author';

//   constructor(private http: HttpClient) { }

//   // Get all courses
//   getAllCourses(): Observable<Course[]> {
//     return this.http.get<Course[]>(this.apiUrl);
//   }

//   // Get course by ID
//   getCourseById(courseId: string): Observable<Course> {
//     return this.http.get<Course>(`${this.apiUrl}/${courseId}`);
//   }

//   // Save or update a course
//   // saveCourse(course: Course): Observable<Course> {
//   //   const headers = { 'Content-Type': 'application/json' };
  
//   //   if (course.courseId) {
//   //     // If courseId exists, it's an update, so use PUT
//   //     return this.http.put<Course>(`${this.apiUrl}/${course.courseId}`, course, { headers });
//   //   } else {
//   //     // If no courseId exists, it's a new course, so use POST
//   //     return this.http.post<Course>(this.apiUrl, course, { headers });
//   //   }
//   // }
  
//   saveCourse(course: Course): Observable<Course> {
//     const headers = { 'Content-Type': 'application/json' };
    
//     if (course.courseId) {
//       // If courseId exists, it's an update, so use PUT
//       return this.http.put<Course>(`${this.apiUrl}/${course.courseId}`, course, { headers });
//     } else {
//       // If no courseId exists, it's a new course, so use POST
//       return this.http.post<Course>(this.apiUrl, course, { headers });
//     }
//   }
  

//   // Delete course by ID
//   deleteCourse(courseId: string): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${courseId}`);
//   }

//   getAllAuthors(): Observable<Author[]> {
//     return this.http.get<Author[]>(this.authorsApiUrl);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private apiUrl = 'http://localhost:8080/api/course';  
  private authorsApiUrl = 'http://localhost:8080/api/author';

  constructor(private http: HttpClient) { }

 
  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  
  getCourseById(courseId: string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${courseId}`);
  }


  saveCourse(course: Course): Observable<Course> {
    const headers = { 'Content-Type': 'application/json' };

    if (course.courseId) {
     
      return this.http.put<Course>(`${this.apiUrl}/${course.courseId}`, course, { headers });
    } else {
      
      return this.http.post<Course>(this.apiUrl, course, { headers });
    }
  }

 
  deleteCourse(courseId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${courseId}`);
  }

  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsApiUrl);
  }

}
