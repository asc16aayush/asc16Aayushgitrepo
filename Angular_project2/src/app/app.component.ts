import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';




@Component({
  // selector: 'app-root',
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_project2';

}
