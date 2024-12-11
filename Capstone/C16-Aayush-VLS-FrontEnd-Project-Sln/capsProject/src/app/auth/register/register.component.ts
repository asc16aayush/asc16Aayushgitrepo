import { Component, OnInit } from '@angular/core';
import { Admin } from '../../shared/models/admin.model';  
import { AdminService } from '../../shared/services/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  admin: Admin = new Admin('', '', '', '');  
  admins: Admin[] = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAllAdmins();
  }

  
  getAllAdmins() {
    this.adminService.getAllAdmins().subscribe(
      (admins: Admin[]) => {
        this.admins = admins;
      },
      (error) => {
        this.errorMessage = 'Error loading admins!';
        this.successMessage = '';
      }
    );
  }

  
  onSubmit(): void {
    if (this.admin.aId) {
     
      this.adminService.updateAdmin(this.admin.aId, this.admin).subscribe(
        (response) => {
          this.successMessage = 'Admin updated successfully!';
          this.errorMessage = '';
          this.getAllAdmins(); 
          this.resetForm();  
        },
        (error) => {
          this.errorMessage = 'Error while updating the admin!';
          this.successMessage = '';
        }
      );
    } else {
      
      this.adminService.createAdmin(this.admin).subscribe(
        (response) => {
          this.successMessage = 'Admin added successfully!';
          this.errorMessage = '';
          this.getAllAdmins();  
          this.resetForm();  
        },
        (error) => {
          this.errorMessage = 'Error while adding the admin!';
          this.successMessage = '';
        }
      );
    }
  }

  
  resetForm() {
    this.admin = new Admin('', '', '', '');  
    this.successMessage = '';
    this.errorMessage = '';
  }

 
  editAdmin(admin: Admin) {
    this.admin = { ...admin };  
  }

 
  deleteAdmin(aId: string) {
    this.adminService.deleteAdmin(aId).subscribe(
      () => {
        this.successMessage = 'Admin deleted successfully!';
        this.errorMessage = '';
        this.getAllAdmins();  
      },
      (error) => {
        this.errorMessage = 'Error while deleting the admin!';
        this.successMessage = '';
      }
    );
  }
}
