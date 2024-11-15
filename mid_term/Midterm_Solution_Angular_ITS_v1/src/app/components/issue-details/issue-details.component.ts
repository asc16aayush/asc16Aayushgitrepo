import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../../service/issue.service';
import { Issue } from '../../models/issue.model';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit {
  issue: Issue | undefined;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.issueService.getIssue(id).subscribe((issue: Issue) => {
      this.issue = issue;
    });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
