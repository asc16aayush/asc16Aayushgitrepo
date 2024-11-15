import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../issue.service';
import { Issue } from '../issue.model';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {
  issue: Issue | undefined;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private router: Router
  ) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getIssue(this.id);
  }

  getIssue(id: number): void {
    this.issueService.getIssueById(id).subscribe(
      (issue) => (this.issue = issue),
      (error) => console.log('Error fetching issue:', error)
    );
  }

  onSubmit(): void {
    if (this.issue) {
      this.issueService.updateIssue(this.issue.id, this.issue).subscribe(() => {
        // Redirect to the issues list after the issue is updated
        this.router.navigate(['/issues']);
      });
    }
  }
}
