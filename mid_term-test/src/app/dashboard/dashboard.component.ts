import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Router } from '@angular/router';
import { Issue } from '../model';  // Import the Issue model

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  issues: Issue[] = [];  // Initialize as an empty array of type Issue[]
  filteredIssues: Issue[] = [];  // Holds filtered issues
  errorMessage: string = '';
  newIssue: Issue = {  // Adding a new issue model
    id: '0',  // Initialize id as string
    title: '',
    description: '',
    priority: 'Low',
    status: 'Open',
    assignee: '',
    lastUpdated: new Date().toISOString()
  };
  searchQuery: string = '';  // Holds the current search query

  constructor(private issuesService: IssuesService, private router: Router) { }

  ngOnInit(): void {
    this.loadIssues();
  }

  loadIssues(): void {
    this.issuesService.getAllIssues().subscribe(
      (data: Issue[]) => {
        this.issues = data;
        this.filteredIssues = data;  // Initially, show all issues
      },
      (error) => {
        this.errorMessage = 'Error loading issues: ' + error.message;
      }
    );
  }

  createIssue(): void {
    if (this.newIssue.title && this.newIssue.description) {
      this.issuesService.createIssue(this.newIssue).subscribe(
        (createdIssue) => {
          this.issues.push(createdIssue);  // Add the newly created issue to the list
          this.newIssue = {  // Reset the form
            id: '0',  // Initialize as string
            title: '',
            description: '',
            priority: 'Low',
            status: 'Open',
            assignee: '',
            lastUpdated: new Date().toISOString()
          };
          this.filterIssues();  // Re-apply filters after creating an issue
        },
        (error) => {
          console.error('Error creating issue', error);
          this.errorMessage = 'Error creating issue: ' + error.message;
        }
      );
    } else {
      this.errorMessage = 'Please fill in both title and description';
    }
  }

  deleteIssue(issueId: string): void {  // Accepts id as a string
    this.issuesService.deleteIssue(issueId).subscribe(
      () => {
        // Reload issues after successful deletion
        this.loadIssues();
      },
      (error) => {
        console.error('Error deleting issue', error);
        this.errorMessage = 'Error deleting issue: ' + error.message;
      }
    );
  }

  editIssue(issueId: string): void {  // Pass id as string
    this.router.navigate([`/issue/${issueId}`]);  // Navigate to the update page
  }

  filterIssues(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredIssues = this.issues.filter(issue =>
      issue.title.toLowerCase().includes(query) ||
      issue.description.toLowerCase().includes(query) ||
      issue.status.toLowerCase().includes(query) ||
      issue.priority.toLowerCase().includes(query) ||
      (issue.assignee && issue.assignee.toLowerCase().includes(query))
    );
  }
}
