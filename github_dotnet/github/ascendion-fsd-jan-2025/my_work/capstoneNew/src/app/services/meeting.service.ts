import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meeting } from '../models/meeting.model';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private apiUrl = 'https://localhost:5001/api'; // Your backend URL

  constructor(private http: HttpClient) {}

  getMeetings(filter: string): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${this.apiUrl}/meetings?filter=${filter}`);
  }

  createMeeting(meeting: Meeting): Observable<Meeting> {
    return this.http.post<Meeting>(`${this.apiUrl}/meetings`, meeting);
  }

  addAttendees(meetingId: number, attendees: string[]): Observable<any> {
    return this.http.put(`${this.apiUrl}/meetings/${meetingId}/attendees`, attendees);
  }

  excuseSelfFromMeeting(meetingId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/meetings/${meetingId}/excuse`);
  }
}
