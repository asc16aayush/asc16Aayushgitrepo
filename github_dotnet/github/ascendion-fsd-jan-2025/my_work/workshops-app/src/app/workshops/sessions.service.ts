import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ISession from './models/ISession';

export type VoteType = 'upvote' | 'downvote';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  constructor(private http: HttpClient) {}

  getSessionsForWorkshop(workshopId: number) {
    return this.http.get<ISession[]>(
      `http://localhost:8001/workshops/${workshopId}/sessions`
    );
  }

  voteForSession(sessionId: number, voteType: VoteType) {
    return this.http.put<ISession>(
      `http://localhost:8001/sessions/${sessionId}/${voteType}`,
      null // we generally pass data in put request. In this case we don't have any data
    );
  }
}