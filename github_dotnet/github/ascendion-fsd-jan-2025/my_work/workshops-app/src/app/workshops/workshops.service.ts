import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IWorkshop from './models/IWorkshop';

@Injectable({
  providedIn: 'root',
})
export class WorkshopsService {
  constructor(private http: HttpClient) {}

  getWorkshops(page: number = 1, category: string = '') {
    const params: { _page: number; category?: string } = {
      _page: page,
    };

    if (category !== '') {
      params.category = category;
    }

    return this.http.get<IWorkshop[]>(`http://localhost:8001/workshops`, {
      // params: params,
      params,
    });
  }

  getWorkshopById(workshopId: number) {
    return this.http.get<IWorkshop>(
      `http://localhost:8001/workshops/${workshopId}`
    );
  }
}