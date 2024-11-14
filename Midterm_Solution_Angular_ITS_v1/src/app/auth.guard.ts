import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';  // Import your auth service

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Check if the user is authenticated
    if (this.authService.isAuthenticated()) {
      return true;  // User is authenticated, allow access
    }

    
    // If not authenticated, redirect to the login page
    this.router.navigate(['/login']);
    return false;
  }
}
