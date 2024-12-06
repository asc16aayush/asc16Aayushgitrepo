// src/app/components/register/register.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../shared/services/admin.service';
import { Admin } from '../../shared/models/admin.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  admin: Admin = new Admin('', '', '', '', '', '');
  message: string = '';

  constructor(private adminService: AdminService, private router: Router) {}

  registerAdmin() {
    this.adminService.createOrUpdateAdmin(this.admin).subscribe(
      (response) => {
        this.message = 'Admin registered successfully!';
        // Navigate to another page or show success message
        this.router.navigate(['/admin-list']);
      },
      (error) => {
        this.message = 'Error occurred while registering admin!';
        console.error('Error occurred:', error);
        if (error.status === 500) {
          // Log more details for debugging
          console.error('Backend Error:', error.error);
        }
      }
    );
  }
  
}
