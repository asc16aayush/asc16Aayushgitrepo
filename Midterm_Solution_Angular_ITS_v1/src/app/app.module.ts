import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms';  

import { AppRoutingModule } from './app-routing.module';  
import { RouterModule } from '@angular/router';  
import { AppComponent } from './app.component';  
import { LoginComponent } from './components/login/login.component';  
import { DashboardComponent } from './components/dashboard/dashboard.component';  
import { IssueListComponent } from './components/issue-list/issue-list.component';  
import { AddIssueComponent } from './components/add-issue/add-issue.component';  
import { IssueDetailsComponent } from './components/issue-details/issue-details.component';  

import { IssueService } from './service/issue.service';  
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    IssueListComponent,
    AddIssueComponent,
    IssueDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,  
    RouterModule,  
    HttpClientModule,  
    FormsModule  
  ],
  providers: [IssueService],  
  bootstrap: [AppComponent]  
})
export class AppModule { }
