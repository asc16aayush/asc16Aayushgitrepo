import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssuesService } from '../issues.service';
import { Issue } from '../model'; // Import the Issue model

@Component({
  selector: 'app-update-issue',
  templateUrl: './update-issue.component.html',
  styleUrls: ['./update-issue.component.css']
})
export class UpdateIssueComponent implements OnInit {
  issue: Issue | undefined;
  statusOptions = ['Open', 'In Progress', 'Resolved', 'Closed'];
  errorMessage: string = '';

  constructor(
    private issuesService: IssuesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const issueId = this.route.snapshot.paramMap.get('id');
    if (issueId) {
      this.getIssue(issueId); // Fetch the issue for editing
    }
  }

  getIssue(id: string): void {
    this.issuesService.getIssueById(id).subscribe(
      (issue: Issue) => {
        this.issue = issue;
      },
      (error) => {
        this.errorMessage = 'Error fetching issue: ' + error.message;
      }
    );
  }

  updateStatus(): void {
    if (this.issue) {
      this.issue.lastUpdated = new Date().toISOString();  // Set the current timestamp when updating
      this.issuesService.updateIssue(this.issue.id, this.issue).subscribe(
        () => {
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          this.errorMessage = 'Error updating issue: ' + error.message;
        }
      );
    }
  }
}
