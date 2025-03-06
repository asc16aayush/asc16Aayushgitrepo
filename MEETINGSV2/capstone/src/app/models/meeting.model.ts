export interface Meeting {
  id?: number;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
  attendees: string; // Array of user IDs attending the meeting
}
