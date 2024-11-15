import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { IssueListComponent } from './issue/issue-list/issue-list.component';
import { IssueDetailComponent } from './issue/issue-detail/issue-detail.component';
import { AddIssueComponent } from './issue/add-issue/add-issue.component';
import { EditIssueComponent } from './issue/edit-issue/edit-issue.component'; // New EditIssueComponent
import { CommonModule } from '@angular/common';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'issues', component: IssueListComponent, canActivate: [AuthGuard] },
  { path: 'issues/:id', component: IssueDetailComponent, canActivate: [AuthGuard] },
  { path: 'add-issue', component: AddIssueComponent, canActivate: [AuthGuard] },  // Add Issue route
  { path: 'edit-issue/:id', component: EditIssueComponent, canActivate: [AuthGuard] },  // Edit Issue route
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
