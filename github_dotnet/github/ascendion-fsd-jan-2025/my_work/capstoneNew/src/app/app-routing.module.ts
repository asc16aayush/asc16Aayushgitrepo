import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MeetingListComponent } from './components/meeting-list/meeting-list.component';
import { MeetingCreateComponent } from './components/meeting-create/meeting-create.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'meetings', component: MeetingListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-meeting', component: MeetingCreateComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
