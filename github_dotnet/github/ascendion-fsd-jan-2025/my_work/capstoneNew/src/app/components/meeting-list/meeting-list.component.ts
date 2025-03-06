import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../../services/meeting.service';
import { Meeting } from '../../models/meeting.model';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {
  meetings: Meeting[] = [];
  filter = 'TODAY';

  constructor(private meetingService: MeetingService) {}

  ngOnInit(): void {
    this.getMeetings();
  }

  getMeetings() {
    this.meetingService.getMeetings(this.filter).subscribe((data: Meeting[]) => {
      this.meetings = data;
    });
  }

  excuseSelf(meetingId: number) {
    this.meetingService.excuseSelfFromMeeting(meetingId).subscribe(() => {
      this.getMeetings(); // Refresh list
    });
  }
}
