import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  loginAttempts = 0;
  maxAttempts = 3;
  isDisabled = false;
  remainingTime = 30;
  timer: any;

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    if (this.email === '' || this.password === '') {
      alert('Email and Password cannot be blank.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(this.email) || !passwordRegex.test(this.password)) {
      alert('Invalid email or password format.');
      this.handleFailedAttempt();
      return;
    }

    // Use AuthService to check login credentials
    if (this.authService.login(this.email, this.password)) {
      alert('Login successful!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials.');
      this.handleFailedAttempt();
    }
  }

  handleFailedAttempt() {
    this.loginAttempts++;
    const remainingAttempts = this.maxAttempts - this.loginAttempts;

    if (remainingAttempts > 0) {
      alert(`Invalid credentials. Attempts remaining: ${remainingAttempts}`);
    } else {
      alert('Too many unsuccessful attempts. Login disabled for 30 seconds.');
      this.disableLoginButton();
    }
  }

  disableLoginButton() {
    this.isDisabled = true;
    this.remainingTime = 30;

    this.timer = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        clearInterval(this.timer);
        this.resetLogin();
      }
    }, 1000);
  }

  resetLogin() {
    this.isDisabled = false;
    this.loginAttempts = 0;
    this.remainingTime = 30;
  }
}
