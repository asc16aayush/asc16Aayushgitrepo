import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { LearnersComponent } from './components/learners/learners.component';
import { RegistrationsComponent } from './components/registrations/registrations.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

// Services
import { AuthService } from './shared/services/auth.service';
import { CoursesService } from './shared/services/courses.service';
import { AuthorsService } from './shared/services/authors.service';
import { LearnersService } from './shared/services/learners.service';
import { RegistrationsService } from './shared/services/registrations.service';
import { ReviewsService } from './shared/services/reviews.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CoursesComponent,
    AuthorsComponent,
    LearnersComponent,
    RegistrationsComponent,
    ReviewsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    CoursesService,
    AuthorsService,
    LearnersService,
    RegistrationsService,
    ReviewsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
