
import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Employee } from "../model/employee.model";
@Injectable({
    providedIn:'root'
})

export class EmployeeService{
    baseUrl:string="http://localhost:3000/employees";
    constructor(private http:HttpClient){
        // this.http=http;
    }

    getemployee(){
        return this.http.get<Employee[]>(this.baseUrl);
    }

    createEmployee(employee:Employee){
        return this.http.post(this.baseUrl,employee);

    }

}