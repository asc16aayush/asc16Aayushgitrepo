import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../model/employee.model";
 
@Injectable({
    providedIn: "root"
})
 
export class EmployeeService{
    baseUrl:string = "http://localhost:3000/employees";
    constructor(private httpClient:HttpClient){
 
    }
    getEmployees(){
        return this.httpClient.get<Employee[]>(this.baseUrl);
    }
    getEmployeeById(id: number){
        return this.httpClient.get<Employee>(this.baseUrl+"/"+id);
    }
    createEmployee(employee:Employee){
        return this.httpClient.post(this.baseUrl,employee);
    }
    updateEmployee(id:number,employee:any){
        return this.httpClient.put(this.baseUrl+"/"+id,employee);
    }
    deleteEmployee(id:number){
        return this.httpClient.delete(this.baseUrl+"/"+id);
 
    }
}