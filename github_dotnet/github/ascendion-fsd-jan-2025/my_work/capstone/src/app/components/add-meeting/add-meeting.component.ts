// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MeetingService } from '../../services/meeting.service';
// import { Meeting } from '../../models/meeting.model';

// @Component({
//   selector: 'app-add-meeting',
//   templateUrl: './add-meeting.component.html',
//   styleUrls: ['./add-meeting.component.scss']
// })
// export class AddMeetingComponent {
//   meetingForm: FormGroup;

//   constructor(private fb: FormBuilder, private meetingService: MeetingService) {
//     this.meetingForm = this.fb.group({
//       name: ['', Validators.required],
//       date: ['', Validators.required],  // Date in ISO 8601 format
//       startTime: ['', Validators.required],  // Time in HH:mm:ss format
//       endTime: ['', Validators.required],  // Time in HH:mm:ss format
//       description: [''],
//       attendees: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.meetingForm.valid) {
//       const meeting: Meeting = this.meetingForm.value;

//       // Manually format the date, startTime, and endTime fields to the desired format
//       const formattedMeeting = {
//         name: meeting.name,
//         date: new Date(meeting.date).toISOString(),  // Format date to ISO string
//         startTime: this.formatTime(meeting.startTime),  // Ensure time format HH:mm:ss
//         endTime: this.formatTime(meeting.endTime),      // Ensure time format HH:mm:ss
//         description: meeting.description,
//         attendees: meeting.attendees
//       };

//       // Log the formatted data
//       console.log('Formatted form data:', JSON.stringify(formattedMeeting, null, 2));

//       // Call the service to send the data
//       this.meetingService.createMeeting(formattedMeeting).subscribe(() => {
//         console.log('Meeting created successfully!');
//       });
//     }
//   }

//   // Helper function to format the time to HH:mm:ss
//   formatTime(time: string): string {
//     const date = new Date();
//     const [hours, minutes] = time.split(':');
//     date.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0);  // Set hours, minutes, and 0 seconds
//     return date.toTimeString().split(' ')[0];  // Return in HH:mm:ss format
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeetingService } from '../../services/meeting.service';
import { UsersService } from '../../services/users.service';
import { Meeting } from '../../models/meeting.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.scss']
})
export class AddMeetingComponent implements OnInit {
  meetingForm: FormGroup;
  users: User[] = [];
  selectedAttendees: string[] = [];  // Array to store selected email addresses

  constructor(
    private fb: FormBuilder,
    private meetingService: MeetingService,
    private usersService: UsersService
  ) {
    this.meetingForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      description: [''],
      attendees: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getUsers();  // Fetch users when the component is initialized
  }

  getUsers(): void {
    this.usersService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  // onSubmit(): void {
  //   // if (this.meetingForm.valid) {
  //     const meeting: Meeting = this.meetingForm.value;

  //     const formattedMeeting = {
  //       name: meeting.name,
  //       date: new Date(meeting.date).toISOString(),
  //       startTime: this.formatTime(meeting.startTime),
  //       endTime: this.formatTime(meeting.endTime),
  //       description: meeting.description,
  //       attendees: this.selectedAttendees  // Use selected emails directly
  //     };

  //     console.log('Formatted form data:', JSON.stringify(formattedMeeting, null, 2));

  //     this.meetingService.createMeeting(formattedMeeting).subscribe(() => {
  //       console.log('Meeting created successfully!');
  //     }
  //   );
  //   // }
  // }

  onSubmit(): void {
    // If you still need to keep attendees as a string, join the selected emails into one string.
    // if (this.meetingForm.valid) {
    const meeting: Meeting = this.meetingForm.value;
  
    const formattedMeeting = {
      name: meeting.name,
      date: new Date(meeting.date).toISOString(),
      startTime: this.formatTime(meeting.startTime),
      endTime: this.formatTime(meeting.endTime),
      description: meeting.description,
      attendees: this.selectedAttendees.join(', ')  // Join attendees as a single string
    };
  
    console.log('Formatted form data:', JSON.stringify(formattedMeeting, null, 2));
  
    this.meetingService.createMeeting(formattedMeeting).subscribe(() => {
      console.log('Meeting created successfully!');
    });
  // }
  }
  

  formatTime(time: string): string {
    const date = new Date();
    const [hours, minutes] = time.split(':');
    date.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0);
    return date.toTimeString().split(' ')[0];
  }

  // Handle multi-select change event
  onAttendeeSelect(event: Event): void {
    const selectedOptions = (<HTMLSelectElement>event.target).selectedOptions;
    this.selectedAttendees = Array.from(selectedOptions).map(option => option.value);
  }

  onRemoveAttendee(email: string): void {
    const index = this.selectedAttendees.indexOf(email);
    if (index > -1) {
      this.selectedAttendees.splice(index, 1);  // Remove email from selected list
    }
  }
}