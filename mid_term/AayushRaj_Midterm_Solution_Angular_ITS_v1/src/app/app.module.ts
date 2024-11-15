import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IssueListComponent } from './issue/issue-list/issue-list.component';
import { AddIssueComponent } from './issue/add-issue/add-issue.component';
import { EditIssueComponent } from './issue/edit-issue/edit-issue.component'; // Import EditIssueComponent
import { LoginComponent } from './auth/login/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    AddIssueComponent,
    EditIssueComponent, // Declare EditIssueComponent
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule here
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
