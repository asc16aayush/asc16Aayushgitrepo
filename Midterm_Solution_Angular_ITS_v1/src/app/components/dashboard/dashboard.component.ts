import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../service/issue.service';
import { Issue } from '../../models/issue.model';
import { Router } from '@angular/router';
import { Route } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalIssues: number = 0;
  openIssues: number = 0;
  inProgressIssues: number = 0;
  resolvedIssues: number = 0;
  closedIssues: number = 0;
  issues: Issue[] = [];




  openIssuesList: Issue[] = [];
  inProgressIssuesList: Issue[] = [];
  resolvedIssuesList: Issue[] = [];
  closedIssuesList: Issue[] = [];
  totalIssuesList: Issue[] = [];

  showIssues: any = {
    total: false,
    open: false,
    inProgress: false,
    resolved: false,
    closed: false
  };

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit(): void {
    this.loadIssues();
  }

  loadIssues(): void {
    this.issueService.getIssues().subscribe((issues: Issue[]) => {
      this.issues = issues;
      this.totalIssuesList = issues;
      this.openIssuesList = issues.filter(issue => issue.status === 'Open');
      this.inProgressIssuesList = issues.filter(issue => issue.status === 'In Progress');
      this.resolvedIssuesList = issues.filter(issue => issue.status === 'Resolved');
      this.closedIssuesList = issues.filter(issue => issue.status === 'Closed');


      this.totalIssues = issues.length;
      this.openIssues = this.openIssuesList.length;
      this.inProgressIssues = this.inProgressIssuesList.length;
      this.resolvedIssues = this.resolvedIssuesList.length;
      this.closedIssues = this.closedIssuesList.length;
    });
  }


  toggleIssues(category: string): void {

    this.showIssues[category] = !this.showIssues[category];
  }


  addNewIssue(): void {
    console.log('Add new issue functionality will go here!');
    this.router.navigate(['/add-issue']);

  }
}
