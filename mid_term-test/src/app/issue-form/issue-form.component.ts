import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssuesService } from '../issues.service';
import { Issue } from '../model'; // Import the Issue model

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {
  issue: Issue = {
    id: '0',  // Initialize id as string for new issue
    title: '',
    description: '',
    priority: 'Medium',
    status: 'Open',
    assignee: '',
    lastUpdated: '' // Initialize as an empty string
  };

  isEditing = false; // To track if we're editing an existing issue

  constructor(
    private issuesService: IssuesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Check if we are editing an existing issue
    const issueId = this.route.snapshot.paramMap.get('id');
    if (issueId) {
      this.isEditing = true;
      this.loadIssue(issueId); // Fetch the issue by ID for editing
    }
  }

  loadIssue(id: string): void {
    this.issuesService.getIssueById(id).subscribe((issue: Issue) => {
      this.issue = issue;
    });
  }

  saveIssue(): void {
    if (this.isEditing) {
      // Update existing issue
      this.issue.lastUpdated = new Date().toISOString(); // Set the current timestamp when updating
      this.issuesService.updateIssue(this.issue.id, this.issue).subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
    } else {
      // Create new issue
      this.issue.lastUpdated = new Date().toISOString(); // Set the current timestamp when creating
      this.issuesService.createIssue(this.issue).subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
    }
  }
}
