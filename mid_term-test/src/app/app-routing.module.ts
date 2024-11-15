import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueDetailsComponent } from './issue-detail/issue-detail.component';
import { UpdateIssueComponent } from './update-issue/update-issue.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create', component: IssueFormComponent },
  { path: 'issue/:id', component: UpdateIssueComponent },
  { path: 'edit/:id', component: IssueFormComponent },  // Edit existing issue
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
