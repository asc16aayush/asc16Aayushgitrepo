import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { AddIssueComponent } from './components/add-issue/add-issue.component';
import { IssueDetailsComponent } from './components/issue-details/issue-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'issues', component: IssueListComponent },
  { path: 'add-issue', component: AddIssueComponent },
  { path: 'issue/:id', component: IssueDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule],
  bootstrap:[AppComponent]  
})
export class AppRoutingModule {}
