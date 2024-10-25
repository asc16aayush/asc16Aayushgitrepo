import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../service/employee-service';



@Component({
  selector: 'app-add-emp-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-emp-component.component.html',
  styleUrl: './add-emp-component.component.css'
})
export class AddEmpComponentComponent {
  addForm : FormGroup;

  constructor(private formBuilder:FormBuilder,
  private employeeService:EmployeeService){
    this.addForm=this.formBuilder.group({
      id:[],
      name:[],
      salary:[]
    });

  }


  

  }


