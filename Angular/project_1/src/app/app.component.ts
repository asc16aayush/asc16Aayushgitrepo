import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './model/employee.model';
import { EmployeeService } from './service/employee-service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports:[CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // template: `
  //   <h1>My Awesome App</h1>
  //   <p>A good app by me 👌💩</p>

  //   <table border="1" style="margin: 20px;">
  //     <thead>
  //       <tr>
  //         <th>ID</th>
  //         <th>Name</th>
  //         <th>Age</th>
  //         <th>Gender</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       <tr>
  //         <td>1</td>
  //         <td>{{ people[0].name }}</td>
  //         <td>{{ people[0].age }}</td>
  //         <td>{{ people[0].gender }}</td>
  //       </tr>
  //       <tr>
  //         <td>2</td>
  //         <td>{{ people[1].name }}</td>
  //         <td>{{ people[1].age }}</td>
  //         <td>{{ people[1].gender }}</td>
  //       </tr>
  //       <tr>
  //         <td>3</td>
  //         <td>{{ people[2].name }}</td>
  //         <td>{{ people[2].age }}</td>
  //         <td>{{ people[2].gender }}</td>
  //       </tr>
  //   </table>
  
        
  // `,
  // styles: [
  //   'th {background-color:grey; color:red;}',
  // ],

  
})
export class AppComponent implements OnInit{
  title = 'project_1';
  employees?:Employee[];
  // people = [
  //   { name: 'Jalaj', age: 25, gender: 'Male' },
  //   { name: 'Mishra', age: 30, gender: 'Male' },
  //   { name: 'Aayush', age: 28, gender: 'Male' },
  
  // ];


  constructor( private employeeService:EmployeeService){

  }

  ngOnInit(): void {
    console.log("asynchronously retreving data from the server");
    
    this.employeeService.getemployee().subscribe(data => this.employees=data);
  }

}
