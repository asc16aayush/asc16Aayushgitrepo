import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;  // Track user login state

  constructor() { }

  // Simple mock login function
  login(username: string, password: string): boolean {
    if (username === 'manager' && password === 'password') {
      this.isLoggedIn = true;
      return true;  // Successful login
    }
    this.isLoggedIn = false;
    return false; // Failed login
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Log out the user
  logout(): void {
    this.isLoggedIn = false;
  }
}
