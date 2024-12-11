import { Component } from '@angular/core';
import { Registration } from '../../shared/models/registration.model'; // Import the Registration model
import { RegistrationsService } from '../../shared/services/registrations.service'; // Import the service

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css'],
})
export class RegistrationsComponent {
  registrations: Registration[] = []; // Define type as Registration[]

  constructor(private registrationsService: RegistrationsService) {
    // Subscribe to the registrations data from the service
    this.registrationsService.registrations$.subscribe((data) => {
      this.registrations = data;
    });
  }

  addRegistration(registrationData: { courseId: string; learnerId: string }) {
    const newRegistration: Registration = {
      id: 'R' + (1000 + this.registrations.length + 1), // Auto-generate ID
      courseId: registrationData.courseId,
      learnerId: registrationData.learnerId,
    };

    this.registrationsService.addRegistration(newRegistration); // Add registration via service
  }

  deleteRegistration(registrationId: string) {
    this.registrationsService.deleteRegistration(registrationId); // Delete registration via service
  }
}
