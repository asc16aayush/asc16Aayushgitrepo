import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  // Simulate valid credentials for login
  private validUsername = 'admin';
  private validPassword = 'admin';

  constructor() {}

  login(username: string, password: string): boolean {
    // Check if the entered username and password match the valid credentials
    if (username === this.validUsername && password === this.validPassword) {
      this.isAuthenticated = true;
      return true;
    } else {
      return false; // Invalid credentials
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
