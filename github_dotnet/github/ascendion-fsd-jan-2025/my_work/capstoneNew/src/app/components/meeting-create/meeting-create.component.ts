import { Component } from '@angular/core';
import { MeetingService } from '../../services/meeting.service';
import { Meeting } from '../../models/meeting.model';

@Component({
  selector: 'app-meeting-create',
  templateUrl: './meeting-create.component.html',
  styleUrls: ['./meeting-create.component.css']
})
export class MeetingCreateComponent {
  meeting: Meeting = {
    id: 0,
    name: '',
    date: new Date(),
    startTime: '',
    endTime: '',
    description: '',
    // attendees: []
  };

  constructor(private meetingService: MeetingService) {}

  createMeeting() {
    this.meetingService.createMeeting(this.meeting).subscribe({
      next: (res) => console.log('Meeting created!', res),
      error: (err) => console.error(err)
    });
  }
}
