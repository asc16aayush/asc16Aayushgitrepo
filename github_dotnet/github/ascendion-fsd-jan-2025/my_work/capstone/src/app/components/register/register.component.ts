// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MeetingService } from '../../services/meeting.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent {
//   registerForm: FormGroup;

//   constructor(private fb: FormBuilder, private meetingService: MeetingService) {
//     this.registerForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }

//   onRegister() {
//     if (this.registerForm.valid) {
//       this.meetingService.register(this.registerForm.value).subscribe();
//     }
//   }
// }




// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UsersService } from '../../services/users.service';
// import { User } from '../../models/user.model';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent {
//   registerForm: FormGroup;

//   constructor(private fb: FormBuilder, private usersService: UsersService) {
//     this.registerForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }

//   onRegister() {
//     if (this.registerForm.valid) {
//       const user: User = this.registerForm.value;
//       this.usersService.createUser(user).subscribe(() => {
//         console.log('User registered successfully!');
//       });
//     }
//   }
// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]  // Added minLength validation
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const user: User = this.registerForm.value;
      this.usersService.createUser(user).subscribe(() => {
        console.log('User registered successfully!');
      });
    }
  }
}
