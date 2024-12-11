import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api/admin';  

  constructor(private http: HttpClient) {}

   
    createAdmin(admin: Admin): Observable<Admin> {
      return this.http.post<Admin>(this.apiUrl, admin);
    }
  
  
    updateAdmin(aId: string, admin: Admin): Observable<Admin> {
      const url = `${this.apiUrl}/${aId}`;  
      return this.http.put<Admin>(url, admin);
    }

 
  getAllAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl);
  }

  
  getAdminById(aId: string): Observable<Admin> {
    return this.http.get<Admin>(`${this.apiUrl}/${aId}`);
  }

 
  deleteAdmin(aId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${aId}`);
  }
}


