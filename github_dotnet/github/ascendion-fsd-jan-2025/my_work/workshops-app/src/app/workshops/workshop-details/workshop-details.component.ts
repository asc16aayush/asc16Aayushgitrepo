import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { DatePipe } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// this gives the individual icons we want to use
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';

import { LocationPipe } from '../../common/location.pipe';
import { WorkshopsService } from '../workshops.service';
import { LoadingSpinnerComponent } from '../../common/loading-spinner/loading-spinner.component';
import { ErrorAlertComponent } from '../../common/error-alert/error-alert.component';

import IWorkshop, { IModes } from '../models/IWorkshop';

@Component({
  selector: 'app-workshop-details',
  standalone: true,
  imports: [
    DatePipe,
    LocationPipe,
    LoadingSpinnerComponent,
    ErrorAlertComponent,
    FontAwesomeModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './workshop-details.component.html',
  styleUrl: './workshop-details.component.scss',
})
export class WorkshopDetailsComponent implements OnInit {
  loading = true;
  error: Error | null = null;
  workshop!: IWorkshop;
  workshopId!: number;

  // icons = {
  //     faCheckCircle: faCheckCircle,
  //     faTimesCircle: faTimesCircle,
  // }

  // we create `icons` data member as an object with the icons to be used in the HTML
  icons = {
    faCheckCircle,
    faTimesCircle,
  };

  constructor(
    private workshopsService: WorkshopsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loading = true;

    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        const idStr = params.get('id'); // '2'
        this.workshopId = +(idStr as string); // 2

        this.workshopsService.getWorkshopById(this.workshopId).subscribe({
          next: (workshop) => {
            this.workshop = workshop;
            this.loading = false;
          },
          error: (error) => {
            this.error = error;
            this.loading = false;
          },
        });
      },
    });
  }

  // keyof IModes = 'inPerson' | 'online'
  getIconForMode(mode: keyof IModes) {
    return this.workshop.modes[mode]
      ? this.icons.faCheckCircle
      : this.icons.faTimesCircle;
  }
}