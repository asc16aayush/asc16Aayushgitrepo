import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueService } from '../issue.service';
import { Issue } from '../issue.model';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];

  constructor(private issueService: IssueService, private router: Router) {}

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues(): void {
    this.issueService.getIssues().subscribe((data) => {
      this.issues = data;
    });
  }

  // Existing Delete Issue function
  onDeleteIssue(id: number): void {
    this.issueService.onDeleteIssue(id).subscribe(
      () => {
        // On successful deletion, remove the issue from the local array
        this.issues = this.issues.filter(issue => issue.id !== id);
        console.log(`Issue with ID ${id} deleted successfully`);
      },
      (error) => {
        console.error('Error deleting issue', error);
      }
    );
  }

  // New Add Issue function
  onAddIssue(): void {
    // Navigate to the 'add-issue' route
    this.router.navigate(['/add-issue']);
  }

  // New Edit Issue function
  onEditIssue(id: number): void {
    // Navigate to the 'edit-issue/:id' route, passing the issue ID
    this.router.navigate(['/edit-issue', id]);
  }
}
