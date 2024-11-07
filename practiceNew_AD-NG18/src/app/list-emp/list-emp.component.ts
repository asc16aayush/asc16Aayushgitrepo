import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-emp',
  // standalone: true,
  // imports: [],
  templateUrl: './list-emp.component.html',
  styleUrl: './list-emp.component.css'
})
export class ListEmpComponent implements OnInit {
 
  employees: Employee[];
  employeeService: EmployeeService;
  searchID: number;
  matchedEmployee: Employee[];
 
  constructor(employeeService: EmployeeService, private router: Router) {
    this.employeeService = employeeService;
  }
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employeeData) => {
      this.employees = employeeData;
    })
 
  }
  deleteEmployee(id: number | undefined): void {
 
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter(employee => employee.id !== id);
    })
 
  }
 
  updateEmployee(id: number | undefined) {
    if (id !== undefined) {
      this.router.navigate(['update', id]);
    }
    else {
      console.log("EmpIDUndefined");
    }
  }
 
 
  searchEmployee() {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.matchedEmployee = employees.filter(employee => employee.id === this.searchID);
 
      if (this.matchedEmployee.length > 0) {
        Swal.fire({
          icon: "success",
          title: "Hurry...",
          text: "Employee Found",
 
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Employee Not Found",
 
        });
      }
    });
  }
 
 
 
 
 
}
 
 