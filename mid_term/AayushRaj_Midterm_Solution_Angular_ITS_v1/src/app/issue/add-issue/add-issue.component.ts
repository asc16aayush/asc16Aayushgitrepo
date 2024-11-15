import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IssueService } from '../issue.service';
import { Issue } from '../issue.model';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent {
  issue: Issue = {
    id: 0,
    title: '',
    description: '',
    priority: 'Low',
    status: 'Open',
    assignee: '',
    date: ''
  };

  constructor(private issueService: IssueService, private router: Router) {}

  onSubmit(): void {
    this.issueService.addIssue(this.issue).subscribe(() => {
      // Redirect to the issues list after the issue is added
      this.router.navigate(['/issues']);
    });
  }
}
