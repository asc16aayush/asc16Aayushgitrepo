// import { Component, OnInit } from '@angular/core';
// import { LearnersService } from '../../shared/services/learners.service';
// import { Learner } from '../../shared/models/learner.model';

// @Component({
//   selector: 'app-learners',
//   templateUrl: './learners.component.html',
//   styleUrls: ['./learners.component.css']
// })
// export class LearnersComponent implements OnInit {
//   learners: Learner[] = [];
//   learner: Learner = {
//     learnerId: '',  // learnerId will be auto-generated for new learners, but it's part of the model
//     name: '',
//     phone: '',
//     email: '',
//     address: '',
//     courseAssigned: ''
//   };
//   isUpdateMode: boolean = false;

//   constructor(private learnersService: LearnersService) { }

//   ngOnInit(): void {
//     this.getAllLearners();
//   }

//   // Fetch all learners from the backend
//   getAllLearners(): void {
//     this.learnersService.getAllLearners().subscribe(
//       (learners: Learner[]) => {
//         this.learners = learners;
//       },
//       error => {
//         console.error('Error fetching learners!', error);
//       }
//     );
//   }

//   // Add or update a learner
//   saveLearner(): void {
//     if (this.isUpdateMode) {
//       // Update mode: send learner with learnerId
//       this.learnersService.updateLearner(this.learner.learnerId, this.learner).subscribe(
//         () => {
//           this.getAllLearners();
//           this.resetForm();
//         },
//         error => {
//           console.error('Error updating learner!', error);
//         }
//       );
//     } else {
//       // Create mode: omit learnerId from the POST request by using the Learner type
//       const learnerToSave: Learner = { ...this.learner };
//       this.learnersService.saveLearner(learnerToSave).subscribe(
//         () => {
//           this.getAllLearners();
//           this.resetForm();
//         },
//         error => {
//           console.error('Error saving learner!', error);
//         }
//       );
//     }
//   }
  
  

//   // Edit learner
//   editLearner(learnerId: string): void {
//     this.learnersService.getLearnerById(learnerId).subscribe(
//       (learner: Learner) => {
//         this.learner = learner;
//         this.isUpdateMode = true;
//       },
//       error => {
//         console.error('Error fetching learner for edit!', error);
//       }
//     );
//   }

//   // Delete a learner
//   deleteLearner(learnerId: string): void {
//     if (confirm('Are you sure you want to delete this learner?')) {
//       this.learnersService.deleteLearner(learnerId).subscribe(
//         () => {
//           this.getAllLearners();
//         },
//         error => {
//           console.error('Error deleting learner!', error);
//         }
//       );
//     }
//   }

//   // Reset form
//   resetForm(): void {
//     this.learner = {
//       learnerId: '',  // Reset learnerId (although it's auto-generated on back-end)
//       name: '',
//       phone: '',
//       email: '',
//       address: '',
//       courseAssigned: ''
//     };
//     this.isUpdateMode = false;
//   }
// }
import { Component, OnInit } from '@angular/core';
import { LearnersService } from '../../shared/services/learners.service';
import { Learner } from '../../shared/models/learner.model';

@Component({
  selector: 'app-learners',
  templateUrl: './learners.component.html',
  styleUrls: ['./learners.component.css']
})
export class LearnersComponent implements OnInit {
  learners: Learner[] = [];
  learner: Learner = {
    learnerId: '',  // learnerId will be auto-generated for new learners, but it's part of the model
    name: '',
    phone: '',
    email: '',
    address: '',
    courseAssigned: { courseId: '' } // Adjust courseAssigned to be an object with courseId
  };
  isUpdateMode: boolean = false;

  constructor(private learnersService: LearnersService) { }

  ngOnInit(): void {
    this.getAllLearners();
  }

  // Fetch all learners from the backend
  getAllLearners(): void {
    this.learnersService.getAllLearners().subscribe(
      (learners: Learner[]) => {
        this.learners = learners;
      },
      error => {
        console.error('Error fetching learners!', error);
      }
    );
  }

  // Add or update a learner
  saveLearner(): void {
    if (this.isUpdateMode) {
      // Update mode: send learner with learnerId
      this.learnersService.updateLearner(this.learner.learnerId, this.learner).subscribe(
        () => {
          this.getAllLearners();
          this.resetForm();
        },
        error => {
          console.error('Error updating learner!', error);
        }
      );
    } else {
      // Create mode: omit learnerId from the POST request by using the Learner type
      const learnerToSave: Learner = { 
        ...this.learner,
        courseAssigned: { courseId: this.learner.courseAssigned.courseId } // Make sure to wrap courseId in the correct object format
      };
      this.learnersService.saveLearner(learnerToSave).subscribe(
        () => {
          this.getAllLearners();
          this.resetForm();
        },
        error => {
          console.error('Error saving learner!', error);
        }
      );
    }
  }

  // Edit learner
  editLearner(learnerId: string): void {
    this.learnersService.getLearnerById(learnerId).subscribe(
      (learner: Learner) => {
        this.learner = learner;
        this.isUpdateMode = true;
      },
      error => {
        console.error('Error fetching learner for edit!', error);
      }
    );
  }

  // Delete a learner
  deleteLearner(learnerId: string): void {
    if (confirm('Are you sure you want to delete this learner?')) {
      this.learnersService.deleteLearner(learnerId).subscribe(
        () => {
          this.getAllLearners();
        },
        error => {
          console.error('Error deleting learner!', error);
        }
      );
    }
  }

  // Reset form
  resetForm(): void {
    this.learner = {
      learnerId: '',  // Reset learnerId (although it's auto-generated on back-end)
      name: '',
      phone: '',
      email: '',
      address: '',
      courseAssigned: { courseId: '' } // Reset courseAssigned to be an object
    };
    this.isUpdateMode = false;
  }
}
