// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   // standalone: true,
//   // imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'capstone';
// }


// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',   // This selector corresponds to <app-root> in index.html
  templateUrl: './app.component.html',  // Template file
  styleUrls: ['./app.component.scss']    // Styles file
})
export class AppComponent {
  title = 'Meeting App';  // The title displayed in the root component
}
