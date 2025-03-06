// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MeetingService } from '../../services/meeting.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   loginForm: FormGroup;

//   constructor(private fb: FormBuilder, private meetingService: MeetingService) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }

//   onLogin() {
//     if (this.loginForm.valid) {
//       this.meetingService.login(this.loginForm.value).subscribe();
//     }
//   }
// }
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UsersService } from '../../services/users.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   loginForm: FormGroup;

//   constructor(private fb: FormBuilder, private usersService: UsersService) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }

//   onLogin() {
//     if (this.loginForm.valid) {
//       const credentials = this.loginForm.value;
//       this.usersService.loginUser(credentials).subscribe(() => {
//         console.log('Login successful');
//       });
//     }
//   }
// }
//----------------------------------------------------------


// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UsersService } from '../../services/users.service';
// import { Router } from '@angular/router'; // Import Router to navigate after login

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   loginForm: FormGroup;

//   constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }

//   onLogin() {
//     if (this.loginForm.valid) {
//       const credentials = this.loginForm.value;
//       this.usersService.loginUser(credentials).subscribe(
//         (response) => {
//           console.log('Login successful');
//           // Set the user's email in localStorage
//           localStorage.setItem('userEmail', credentials.email);
//           // Redirect the user to another page (optional)
//           this.router.navigate(['/meeting-list']); // Update the route accordingly
//         },
//         (error) => {
//           console.error('Login failed', error);
//         }
//       );
//     }
//   }
// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router'; // Import Router to navigate after login

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.usersService.loginUser(credentials).subscribe(
        (response) => {
          console.log('Login successful');
          // Set the user's email in localStorage
          localStorage.setItem('userEmail', credentials.email);
          // Redirect the user to another page (optional)
          this.router.navigate(['/meeting-list']); // Update the route accordingly
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
    }
  }
}
