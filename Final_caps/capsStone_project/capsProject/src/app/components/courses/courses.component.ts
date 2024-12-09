// // src/app/components/courses/courses.component.ts

// import { Component, OnInit } from '@angular/core';
// import { CoursesService } from '../../shared/services/courses.service';
// import { Course } from '../../shared/models/course.model';
// import { Author } from '../../shared/models/author.model';

// @Component({
//   selector: 'app-courses',
//   templateUrl: './courses.component.html',
//   styleUrls: ['./courses.component.css']
// })
// export class CoursesComponent implements OnInit {

//   courses: Course[] = [];
//   selectedCourse: Course = {} as Course;
//   authors: Author[] = []; 
//   isEditing: boolean = false;

//   constructor(private coursesService: CoursesService) {}

//   ngOnInit(): void {
//     this.getCourses();
//     this.getAuthors();
//   }

//   getCourses(): void {
//     this.coursesService.getAllCourses().subscribe(data => {
//       this.courses = data;
//     });
//   }


//   getAuthors(): void {
//     this.coursesService.getAllAuthors().subscribe(data => {
//       this.authors = data;
//     });
//   }


//   saveCourse(): void {
//     console.log('Selected Course:', this.selectedCourse);  // Log the course data
    
//     if (!this.selectedCourse.name || !this.selectedCourse.startDate || !this.selectedCourse.duration || !this.selectedCourse.description || !this.selectedCourse.assignedTo) {
//       alert("Please fill out all fields!");
//       return;
//     }
  
//     this.coursesService.saveCourse(this.selectedCourse).subscribe(
//       (response) => {
//         console.log('Course saved successfully:', response);
//         this.getCourses();
//         this.selectedCourse = {} as Course; // Reset the form
//         this.isEditing = false;
        
//       },
//       (error) => {
//         console.error('Error saving course:', error);
//         alert("There was an error saving the course. Please check the console for details.");
//       }
//     );
//   }
  
  
  



//   editCourse(course: Course): void {
//     this.selectedCourse = { ...course };
//     this.isEditing = true;
//   }

//   deleteCourse(courseId: string): void {
//     if (confirm('Are you sure you want to delete this course?')) {
//       this.coursesService.deleteCourse(courseId).subscribe(() => {
//         this.getCourses();
//       });
//     }
//   }

//   resetForm(): void {
//     this.selectedCourse = {} as Course;
//     this.isEditing = false;
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../shared/services/courses.service';
import { Course } from '../../shared/models/course.model';
import { Author } from '../../shared/models/author.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  selectedCourse: Course = {} as Course;
  authors: Author[] = [];
  isEditing: boolean = false;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getCourses();
    this.getAuthors();
  }

  getCourses(): void {
    this.coursesService.getAllCourses().subscribe(data => {
      this.courses = data;
    });
  }

  getAuthors(): void {
    this.coursesService.getAllAuthors().subscribe(data => {
      this.authors = data;
    });
  }

  saveCourse(): void {
    console.log('Selected Course:', this.selectedCourse);
  
    if (!this.selectedCourse.name || !this.selectedCourse.startDate || !this.selectedCourse.duration || !this.selectedCourse.description || !this.selectedCourse.assignedTo) {
      alert("Please fill out all fields!");
      return;
    }
  
    // Ensure assignedTo is set correctly as a full Author object
    const assignedTo: Author = {
      authorId: this.selectedCourse.assignedTo?.authorId || '',
      name: '',  // You can leave these fields empty or set them as needed
      email: '',
      phone: '',
      biography: ''
    };
  
    // If assignedTo.authorId is undefined, you can handle it here
    if (!assignedTo.authorId) {
      alert("Please select a valid author!");
      return;
    }
  
    this.selectedCourse.assignedTo = assignedTo;  // Correctly assign the Author object
  
    this.coursesService.saveCourse(this.selectedCourse).subscribe(
      (response) => {
        console.log('Course saved successfully:', response);
        this.getCourses();
        this.selectedCourse = {} as Course; // Reset the form
        this.isEditing = false;
      },
      (error) => {
        console.error('Error saving course:', error);
        alert("There was an error saving the course. Please check the console for details.");
      }
    );
  }
  

  editCourse(course: Course): void {
    this.selectedCourse = { ...course };  // Create a copy to avoid modifying the original course
    this.isEditing = true;
  }

  deleteCourse(courseId?: string): void {
    if (!courseId) {
      alert("Invalid course ID!");
      return;
    }

    if (confirm('Are you sure you want to delete this course?')) {
      this.coursesService.deleteCourse(courseId).subscribe(() => {
        this.getCourses();  // Refresh the list after deletion
      });
    }
  }

  resetForm(): void {
    this.selectedCourse = {} as Course;
    this.isEditing = false;
  }
}
