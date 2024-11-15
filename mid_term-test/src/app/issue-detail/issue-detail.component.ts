import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssuesService } from '../issues.service';  // Importing the IssuesService
import { Issue } from '../model';  // Importing the Issue model

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailsComponent implements OnInit {
  issue: Issue | null = null;
  errorMessage: string = '';

  constructor(
    private issuesService: IssuesService,  // Correctly injecting the IssuesService
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');  // id will be string here
    if (id) {
      this.getIssueDetails(id);  // Pass id directly as string
    } else {
      this.errorMessage = 'Issue ID is missing in the URL.';
    }
  }

  // Fetch issue details
  getIssueDetails(id: string): void {
    this.issuesService.getIssueById(id).subscribe(  // Pass id as string to the service
      (data) => {
        this.issue = data;
      },
      (error) => {
        this.errorMessage = 'Error fetching issue details: ' + error.message;
      }
    );
  }

  // Update the issue
  updateIssue(): void {
    if (this.issue) {
      this.issuesService.updateIssue(this.issue.id, this.issue).subscribe(  // Pass id as string to the service
        () => {
          this.router.navigate(['/issues']);
        },
        (error) => {
          this.errorMessage = 'Error updating issue: ' + error.message;
        }
      );
    }
  }

  // Cancel the update and navigate back to the issues list
  cancelUpdate(): void {
    this.router.navigate(['/issues']);
  }
}
