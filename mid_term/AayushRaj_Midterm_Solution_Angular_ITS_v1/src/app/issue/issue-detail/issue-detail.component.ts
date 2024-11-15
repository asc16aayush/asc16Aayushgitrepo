import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from '../issue.model';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html'
})
export class IssueDetailComponent implements OnInit {
  issue: Issue | undefined;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.issueService.getIssueById(id).subscribe((issue) => {
      this.issue = issue;
    });
  }

  onDelete(): void {
    if (this.issue) {
      this.issueService.onDeleteIssue(this.issue.id).subscribe(() => {
        this.router.navigate(['/issues']);
      });
    }
  }
}
