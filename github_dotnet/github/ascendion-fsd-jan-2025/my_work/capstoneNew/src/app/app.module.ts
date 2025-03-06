import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MeetingListComponent } from './components/meeting-list/meeting-list.component';
import { MeetingCreateComponent } from './components/meeting-create/meeting-create.component';

// Services
import { AuthService } from './services/auth.service';
import { MeetingService } from './services/meeting.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MeetingListComponent,
    MeetingCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,           // For template-driven forms (register/login)
    HttpClientModule       // For making HTTP requests to the backend
  ],
  providers: [AuthService, MeetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
