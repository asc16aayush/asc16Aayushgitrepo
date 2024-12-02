import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses = new BehaviorSubject<Course[]>([]);
  courses$ = this.courses.asObservable();

  addCourse(course: Course) {
    const currentCourses = this.courses.getValue();
    this.courses.next([...currentCourses, course]);
  }

  updateCourse(courseId: string, updatedCourse: Course) {
    const currentCourses = this.courses.getValue();
    this.courses.next(currentCourses.map((c) => (c.id === courseId ? updatedCourse : c)));
  }

  deleteCourse(courseId: string) {
    const currentCourses = this.courses.getValue();
    this.courses.next(currentCourses.filter((c) => c.id !== courseId));
  }
}
