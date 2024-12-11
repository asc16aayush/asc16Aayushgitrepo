// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   // standalone: true,
//   // imports: [],
//   templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.css'
// })
// export class DashboardComponent {

// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  
  testimonials: { name: string, text: string }[] = [
    { name: "John Doe", text: "This course changed my life! I got a job at a top tech company within 3 months." },
    { name: "Jane Smith", text: "Highly recommend! The instructors are top-notch and the content is easy to follow." },
    { name: "Emily Clark", text: "I learned so much! The hands-on projects were a great way to apply my knowledge." }
  ];

  courseHelps: string[] = [
    "Gain in-depth knowledge of both front-end and back-end development.",
    "Work on real-world projects that will enhance your skills and portfolio.",
    "Get one-on-one mentoring and feedback from industry experts.",
    "Learn at your own pace with lifetime access to course materials.",
    "Join a community of learners and expand your network in the tech industry."
  ];

  keyFeatures: string[] = [
    "Comprehensive Curriculum covering all essential technologies (HTML, CSS, JavaScript, React, Node.js, and more).",
    "Interactive coding exercises and challenges to build real-world skills.",
    "Access to recorded lectures, quizzes, and assignments for hands-on practice.",
    "Personalized feedback and live Q&A sessions with instructors.",
    "Job placement assistance and career coaching after completion."
  ];
}
