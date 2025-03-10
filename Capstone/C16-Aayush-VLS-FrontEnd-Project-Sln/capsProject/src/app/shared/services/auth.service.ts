import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private admins = [{ email: 'aayush@gmail.com', password: 'Aayush@1' }];
  private isLoggedIn = false;

  login(email: string, password: string): boolean {
    const admin = this.admins.find((a) => a.email === email && a.password === password);
    if (admin) {
      this.isLoggedIn = true;  
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
