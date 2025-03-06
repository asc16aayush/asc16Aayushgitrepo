import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meeting } from '../models/meeting.model';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private baseUrl = 'http://localhost:5260/api/Add';

  constructor(private http: HttpClient) {}

  // Get all meetings
  getAllMeetings(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${this.baseUrl}`);
  }

  // Create a new meeting
  createMeeting(meeting: Meeting): Observable<Meeting> {
    return this.http.post<Meeting>(`${this.baseUrl}`, meeting);
  }

  // Get a specific meeting by ID
  getMeetingById(id: number): Observable<Meeting> {
    return this.http.get<Meeting>(`${this.baseUrl}/${id}`);
  }

 // Update the addAttendee method to accept attendeeEmail instead of attendeeId
addAttendee(meetingId: number, attendeeEmail: string): Observable<void> {
  return this.http.put<void>(`${this.baseUrl}/${meetingId}/add-attendee`, { attendeeEmail });
}


  // Excuse yourself from a meeting (send email)
  excuseYourself(meetingId: number, userEmail: string): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${meetingId}/excuse-yourself`, { userEmail });
  }

  // Filter meetings by criteria (e.g., description, status)
  filterMeetings(filterCriteria: any): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${this.baseUrl}/filter`, { params: filterCriteria });
  }
}
