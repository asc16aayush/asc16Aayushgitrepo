import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { AddIssueComponent } from './components/add-issue/add-issue.component';
import { IssueDetailsComponent } from './components/issue-details/issue-details.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
  { path: 'issues', component: IssueListComponent, canActivate: [AuthGuard] },
  { path: 'add-issue', component: AddIssueComponent, canActivate: [AuthGuard] },
  { path: 'issue/:id', component: IssueDetailsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule],
  bootstrap:[AppComponent]  
})
export class AppRoutingModule {}
