import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // For Two-way Binding (ngModel)
import { HttpClientModule } from '@angular/common/http';  // For making HTTP requests
import { RouterModule } from '@angular/router';  // For routing

// Import Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueDetailsComponent } from './issue-detail/issue-detail.component';

// Import Services
import { IssuesService } from './issues.service';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { UpdateIssueComponent } from './update-issue/update-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    IssueFormComponent,
    IssueDetailsComponent,UpdateIssueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Required for ngModel binding
    HttpClientModule,  // For making HTTP calls to JSON-server
    RouterModule,AppRoutingModule,CommonModule  // For routing between components
  ],
  providers: [IssuesService, AuthService],  // Register services for DI (Dependency Injection)
  bootstrap: [AppComponent]
})
export class AppModule { }
