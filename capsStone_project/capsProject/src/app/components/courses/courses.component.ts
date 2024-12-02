import { Component } from '@angular/core';
import { Course } from '../../shared/models/course.model';
import { CoursesService } from '../../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courses: Course[] = []; // Define the type as Course[]

  constructor(private coursesService: CoursesService) {
    // Subscribe to the service to get the courses data
    this.coursesService.courses$.subscribe((data) => {
      this.courses = data;
    });
  }

  addCourse(courseData: { courseName: string }) {
    const newCourse: Course = {
      id: 'C' + (1000 + this.courses.length + 1), // Auto-generate ID
      name: courseData.courseName,
      description: 'Default Description', // Placeholder for description
      duration: 0, // Default value for duration
      authorId: 'A0001', // Placeholder author ID
    };

    this.coursesService.addCourse(newCourse); // Add course via service
  }

  deleteCourse(courseId: string) {
    this.coursesService.deleteCourse(courseId); // Delete course via service
  }
}
