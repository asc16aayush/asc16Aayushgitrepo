import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    id: 0,
    name: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  register() {
    this.authService.signup(this.user).subscribe({
      next: (res) => console.log('User registered successfully', res),
      error: (err) => console.error(err)
    });
  }
}
