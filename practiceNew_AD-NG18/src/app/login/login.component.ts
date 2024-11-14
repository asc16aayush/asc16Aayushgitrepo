// constructor(private fb: FormBuilder,private router:Router) {}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { Router } from '@angular/router';  // Ensure Router is imported

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  maxAttempts = 3; // Max number of failed login attempts
  attempts = 0; // Counter for failed login attempts
  isLoginDisabled = false; // Flag to disable login button after max attempts
  countdown = 30; // 30 seconds cooldown
  remainingAttempts = this.maxAttempts; // Tracks remaining attempts

  // Hardcoded username and password
  predefinedUsername = 'admin';
  predefinedPassword = '12345';

  constructor(private fb: FormBuilder, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      loginid: ['', [Validators.required]], // Username field
      password: ['', [Validators.required]] // Password field
    });
  }

  // Called when the login form is submitted
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    // Get the entered values
    const loginId = this.loginForm.value.loginid;
    const password = this.loginForm.value.password;

    // Validate the login using predefined username and password
    const loginSuccess = this.validateLogin(loginId, password);

    if (loginSuccess) {
      alert('Login Successful');
      
      // Reset the failed attempts and remaining attempts if login is successful
      this.attempts = 0;
      this.remainingAttempts = this.maxAttempts; // Reset remaining attempts

      // Navigate to the list-emp component after successful login
      this.router.navigate(['employees']);  // This should work now
    } else {
      alert('Login Failed');
      this.attempts++;

      // Correct logic for remaining attempts (ensure it doesn't go below 0)
      if (this.attempts < this.maxAttempts) {
        this.remainingAttempts = this.maxAttempts - this.attempts;
      } else {
        this.remainingAttempts = 0;  // Ensure remaining attempts do not go negative
      }

      // If the user has exceeded max attempts, disable the login button and start cooldown
      if (this.attempts >= this.maxAttempts) {
        this.isLoginDisabled = true;
        this.startCooldown();
      }
    }
  }


  // Validate login credentials
  validateLogin(loginId: string, password: string): boolean {
    return loginId === this.predefinedUsername && password === this.predefinedPassword;
  }

  // Start cooldown period if the user exceeds max attempts
  startCooldown(): void {
    let countdownTimer = timer(0, 1000).subscribe(val => {
      this.countdown = 30 - val; // Countdown from 30 seconds
      if (this.countdown === 0) {
        this.isLoginDisabled = false; // Re-enable the login button after cooldown
        this.attempts = 0; // Reset attempts after cooldown
        this.remainingAttempts = this.maxAttempts; // Reset remaining attempts
        countdownTimer.unsubscribe();
      }
    });
  }
}
