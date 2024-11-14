import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../..//auth.service'; // Import the AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; // Holds error message if login fails
  loading: boolean = false;  // To indicate loading state while processing login

  constructor(private router: Router, private authService: AuthService) { }

  // Login method
  onLogin(): void {
    // Validate the input fields
    if (this.username.trim() === '' || this.password.trim() === '') {
      this.errorMessage = 'Both fields are required.';
      return;
    }

    // Show loading spinner (if you implement one)
    this.loading = true;

    // Call the AuthService to check credentials (can be extended for real authentication)
    if (this.authService.login(this.username, this.password)) {
      // On successful login, redirect to the dashboard
      this.router.navigate(['/dashboard']);
    } else {
      // On failed login, show an error message
      this.errorMessage = 'Invalid username or password.';
      
    }

    // Hide loading spinner after the operation
    this.loading = false;
  }
}
