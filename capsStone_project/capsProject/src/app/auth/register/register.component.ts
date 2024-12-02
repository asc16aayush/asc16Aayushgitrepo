import { Component } from '@angular/core';
import { Admin } from '../../shared/models/admin.model';// Import the Admin interface

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  admins: Admin[] = []; // Explicitly define admins as an array of Admin objects

  registerAdmin(admin: Admin) { // Explicitly type admin parameter as Admin
    // Check if email or phone already exists
    const emailExists = this.admins.some((a) => a.email === admin.email);
    const phoneExists = this.admins.some((a) => a.phone === admin.phone);

    if (emailExists) {
      alert('Email already in use.');
      return;
    }

    if (phoneExists) {
      alert('Phone number already in use.');
      return;
    }

    // Regex validation for name and password
    const nameRegex = /^[a-zA-Z ]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!nameRegex.test(admin.name)) {
      alert('Name should not contain numbers or special characters.');
      return;
    }

    if (!passwordRegex.test(admin.password)) {
      alert('Invalid password format.');
      return;
    }

    this.admins.push(admin); // Add admin to the array
    alert('Admin registered successfully!');
  }
}
