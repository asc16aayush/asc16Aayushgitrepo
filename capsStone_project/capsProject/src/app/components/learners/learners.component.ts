import { Component } from '@angular/core';
import { Learner } from '../../shared/models/learner.model';
import { LearnersService } from '../../shared/services/learners.service';

@Component({
  selector: 'app-learners',
  templateUrl: './learners.component.html',
  styleUrls: ['./learners.component.css'],
})
export class LearnersComponent {
  learners: Learner[] = []; // Define type as Learner[]

  constructor(private learnersService: LearnersService) {
    // Subscribe to learners data from the service
    this.learnersService.learners$.subscribe((data) => {
      this.learners = data;
    });
  }

  addLearner(learnerData: { learnerName: string }) {
    const newLearner: Learner = {
      id: 'L' + (1000 + this.learners.length + 1), // Auto-generate ID
      name: learnerData.learnerName,
    };

    this.learnersService.addLearner(newLearner); // Add learner via service
  }

  deleteLearner(learnerId: string) {
    this.learnersService.deleteLearner(learnerId); // Delete learner via service
  }
}
