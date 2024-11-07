import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-emp',
  // standalone: true,
  // imports: [],
  templateUrl: './update-emp.component.html',
  styleUrl: './update-emp.component.css'
})
export class UpdateEmpComponent implements OnInit{

  id: number = 0;
  employee: Employee = new Employee();
  constructor(private employeeServics: EmployeeService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employee=new Employee();
    this.employeeServics.getEmployeeById(this.id).subscribe(searchedEmploye=>{this.employee=searchedEmploye;},
      error=>console.log(error));
      
    
  }

  updateEmployee():void{

     this.employeeServics.updateEmployee(this.id,this.employee).subscribe(updateEmployee=>{console.log(updateEmployee)},error=>console.log(error));

    this.router.navigate(['/employees']);
    
    
  }

}
