import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { AddMeetingComponent } from './components/add-meeting/add-meeting.component';
import { LoginComponent } from './components/login/login.component';
import { MeetingListComponent } from './components/meeting-list/meeting-list.component';
import { RegisterComponent } from './components/register/register.component';

// Services

import { MeetingService } from './services/meeting.service';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    AddMeetingComponent,
    LoginComponent,
    MeetingListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,  // For reactive forms
    FormsModule           // For template-driven forms
  ],
  providers: [
    
    MeetingService, UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
