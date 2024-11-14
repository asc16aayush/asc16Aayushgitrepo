
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onLogin(): void {
    if (this.username === 'manager' && this.password === 'password') {

      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
