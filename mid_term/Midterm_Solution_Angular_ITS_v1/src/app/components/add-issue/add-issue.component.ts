import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IssueService } from '../../service/issue.service';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent {
  newIssue: any = {
    title: '',
    description: '',
    priority: 'Low',
    status: 'Open',
    assignee: ''
  };

  constructor(private issueService: IssueService, private router: Router) {}

  onSubmit(): void {
    this.issueService.addIssue(this.newIssue).subscribe(() => {
      this.router.navigate(['/issues']);
    });
  }
}
