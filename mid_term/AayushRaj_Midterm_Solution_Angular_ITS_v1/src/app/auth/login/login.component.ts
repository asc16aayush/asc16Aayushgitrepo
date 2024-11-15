import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';  // Holds error message for invalid login

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    // Call the login method from AuthService
    const success = this.authService.login(this.username, this.password);
    if (success) {
      // Navigate to the issues list page on successful login
      this.router.navigate(['/issues']);
    } else {
      // Display error message on invalid credentials
      this.errorMessage = 'Invalid username or password';
    }
  }
}
