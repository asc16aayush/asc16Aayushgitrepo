import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../service/issue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  issues: any[] = [];

  constructor(private issueService: IssueService, private router: Router) {}

  ngOnInit(): void {
    this.issueService.getIssues().subscribe((data) => {
      this.issues = data;
    });
  }

  viewDetails(id: number): void {
    this.router.navigate([`/issue/${id}`]);
  }

  deleteIssue(id: number): void {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.issues = this.issues.filter((issue) => issue.id !== id);
    });
  }
}
