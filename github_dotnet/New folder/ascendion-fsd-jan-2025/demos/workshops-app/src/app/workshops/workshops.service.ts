import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IWorkshop from './models/IWorkshop';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkshopsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getWorkshops(page: number = 1, category: string = '') {
    const params: { _page: number; category?: string } = {
      _page: page,
    };

    if (category !== '') {
      params.category = category;
    }

    return this.http.get<IWorkshop[]>(`${this.apiUrl}/workshops`, {
      // params: params,
      params,
    });
  }

  getWorkshopById(workshopId: number) {
    return this.http.get<IWorkshop>(`${this.apiUrl}/workshops/${workshopId}`);
  }
  
  deleteWorkshopById(workshopId: number) {
    return this.http.delete<void>(`${this.apiUrl}/workshops/${workshopId}`);
  }
}
