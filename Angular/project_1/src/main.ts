import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AddEmpComponentComponent } from './app/add-emp-component/add-emp-component.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));



  bootstrapApplication(AddEmpComponentComponent, appConfig)
  .catch((err) => console.error(err));