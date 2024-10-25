// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf
import { FormsModule } from '@angular/forms';    // Import FormsModule for ngModel

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent  // Declare your component
  ],
  imports: [
    BrowserModule,
    CommonModule,  // Import CommonModule for directives like *ngIf
    FormsModule    // Import FormsModule for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
