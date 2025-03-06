// import { Component, OnInit } from '@angular/core';
// import { MeetingService } from '../../services/meeting.service';
// import { Meeting } from '../../models/meeting.model';

// @Component({
//   selector: 'app-meeting-list',
//   templateUrl: './meeting-list.component.html',
//   styleUrls: ['./meeting-list.component.scss']
// })
// export class MeetingListComponent implements OnInit {

//   meetings: Meeting[] = [];  
//   filteredMeetings: Meeting[] = [];  
//   searchTerm: string = '';  

//   constructor(private meetingService: MeetingService) {}

//   ngOnInit(): void {
//     this.getMeetings();
//   }

//   getMeetings() {
//     this.meetingService.getAllMeetings().subscribe((data: Meeting[]) => {
//       this.meetings = data;
//       this.filteredMeetings = data;
//     });
//   }

//   searchMeetings() {
//     if (this.searchTerm) {
//       this.filteredMeetings = this.meetings.filter(meeting =>
//         meeting.description.toLowerCase().includes(this.searchTerm.toLowerCase())
//       );
//     } else {
//       this.filteredMeetings = [...this.meetings];
//     }
//   }

//   // excuseYourself(meetingId: number) {
//   //   this.meetingService.excuseYourself(meetingId, 1).subscribe(() => {
//   //     console.log(`Excused from meeting with ID: ${meetingId}`);
//   //     this.getMeetings();
//   //   });
//   // }
//   excuseYourself(meetingId: number) {
//     if (meetingId) {
//       this.meetingService.excuseYourself(meetingId, 1).subscribe(() => {
//         console.log(`Excused from meeting with ID: ${meetingId}`);
//         this.getMeetings();
//       });
//     } else {
//       console.warn('Invalid meeting ID');
//     }
//   }
  
// }
// import { Component, OnInit } from '@angular/core';
// import { MeetingService } from '../../services/meeting.service';
// import { Meeting } from '../../models/meeting.model';
// import { UsersService } from '../../services/users.service';
// import { User } from '../../models/user.model';

// @Component({
//   selector: 'app-meeting-list',
//   templateUrl: './meeting-list.component.html',
//   styleUrls: ['./meeting-list.component.scss']
// })
// export class MeetingListComponent implements OnInit {

//   meetings: Meeting[] = [];  
//   filteredMeetings: Meeting[] = [];  
//   users: User[] = [];  
//   searchTerm: string = '';  
//   filterStatus: string = 'ALL';
//   showAttendeeDropdown: number | null = null;

//   constructor(private meetingService: MeetingService, private usersService: UsersService) {}

//   ngOnInit(): void {
//     this.getMeetings();
//     this.getUsers();
//   }

//   // Fetch all meetings
//   getMeetings() {
//     this.meetingService.getAllMeetings().subscribe((data: Meeting[]) => {
//       this.meetings = data;
//       this.filteredMeetings = data;
//     });
//   }

//   // Fetch all users for the attendee dropdown
//   getUsers() {
//     this.usersService.getAllUsers().subscribe((data: User[]) => {
//       this.users = data;
//     });
//   }

//   // Search meetings by description
//   searchMeetings() {
//     this.filteredMeetings = this.meetings.filter(meeting =>
//       meeting.description.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );
//   }

//   // Filter meetings by status (PAST, UPCOMING, TODAY, ALL)
//   filterMeetingsByStatus() {
//     const url = `http://localhost:5260/api/Add/filter?filter=${this.filterStatus}`;
//     this.meetingService.filterMeetings({ filter: this.filterStatus }).subscribe((data: Meeting[]) => {
//       this.filteredMeetings = data;
//     });
//   }

// // Add attendee to a meeting
// addAttendee(meetingId: number, event: Event) {
//   const selectElement = event.target as HTMLSelectElement;
//   const attendeeEmail = selectElement.value; // Get selected attendee's email

//   if (attendeeEmail) {
//     // Log the data being sent
//     console.log('Adding attendee:', { meetingId, attendeeEmail });

//     this.meetingService.addAttendee(meetingId, attendeeEmail).subscribe(() => {
//       this.getMeetings(); // Refresh meetings after adding attendee
//     });
//   } else {
//     console.error("Attendee email is null or undefined");
//   }
// }

//   // Show attendee dropdown for adding users
//   toggleAddAttendeeDropdown(meetingId: number) {
//     this.showAttendeeDropdown = this.showAttendeeDropdown === meetingId ? null : meetingId;
//   }

//   // Excuse yourself from a meeting
//   excuseYourself(meetingId: number) {
//     const loggedInUserEmail = localStorage.getItem('userEmail');

//     if (loggedInUserEmail) {
//       // Log the data being sent
//       console.log('Excusing yourself from meeting:', { meetingId, userEmail: loggedInUserEmail });

//       this.meetingService.excuseYourself(meetingId, loggedInUserEmail).subscribe(() => {
//         console.log(`Excused from meeting with ID: ${meetingId}`);
//         this.getMeetings(); // Refresh meetings after excusing
//       });
//     } else {
//       console.error("Logged in user email is null or undefined");
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../../services/meeting.service';
import { Meeting } from '../../models/meeting.model';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {

  meetings: Meeting[] = [];
  filteredMeetings: Meeting[] = [];
  users: User[] = [];
  searchTerm: string = '';
  filterStatus: string = 'ALL';
  showAttendeeDropdown: number | null = null;
  loggedInUserEmail: string | null = null; // Store the logged-in user's email

  constructor(private meetingService: MeetingService, private usersService: UsersService) {}

  ngOnInit(): void {
    this.loggedInUserEmail = localStorage.getItem('userEmail'); // Get the logged-in user's email
    this.getMeetings();
    this.getUsers();
  }

  getMeetings() {
    this.meetingService.getAllMeetings().subscribe((data: Meeting[]) => {
      this.meetings = data;
  
      // Filter meetings to show only those where the logged-in user is an attendee
      if (this.loggedInUserEmail) {
        this.filteredMeetings = this.meetings.filter(meeting =>
          // Convert attendees (string) to an array, then check if loggedInUserEmail is in the list
          meeting.attendees.split(',').some((attendee: string) => attendee.trim() === this.loggedInUserEmail)
        );
      } else {
        this.filteredMeetings = [];
      }
    });
  }

  

  // Fetch all users for the attendee dropdown
  getUsers() {
    this.usersService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  // Search meetings by description
  searchMeetings() {
    this.filteredMeetings = this.meetings.filter(meeting =>
      meeting.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Filter meetings by status (PAST, UPCOMING, TODAY, ALL)
  filterMeetingsByStatus() {
    const url = `http://localhost:5260/api/Add/filter?filter=${this.filterStatus}`;
    this.meetingService.filterMeetings({ filter: this.filterStatus }).subscribe((data: Meeting[]) => {
      this.filteredMeetings = data;
    });
  }

  // Add attendee to a meeting
  addAttendee(meetingId: number, event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const attendeeEmail = selectElement.value; // Get selected attendee's email

    if (attendeeEmail) {
      // Log the data being sent
      console.log('Adding attendee:', { meetingId, attendeeEmail });

      this.meetingService.addAttendee(meetingId, attendeeEmail).subscribe(() => {
        this.getMeetings(); // Refresh meetings after adding attendee
      });
    } else {
      console.error("Attendee email is null or undefined");
    }
  }

  // Show attendee dropdown for adding users
  toggleAddAttendeeDropdown(meetingId: number) {
    this.showAttendeeDropdown = this.showAttendeeDropdown === meetingId ? null : meetingId;
  }

  // Excuse yourself from a meeting
  excuseYourself(meetingId: number) {
    const loggedInUserEmail = this.loggedInUserEmail;

    if (loggedInUserEmail) {
      // Log the data being sent
      console.log('Excusing yourself from meeting:', { meetingId, userEmail: loggedInUserEmail });

      this.meetingService.excuseYourself(meetingId, loggedInUserEmail).subscribe(() => {
        console.log(`Excused from meeting with ID: ${meetingId}`);
        this.getMeetings(); // Refresh meetings after excusing
      });
    } else {
      console.error("Logged in user email is null or undefined");
    }
  }
}
