import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

import { ToastService } from '../../../common/toast.service';

import { SessionsService } from '../../sessions.service';
import ISession from '../../models/ISession';
@Component({
  selector: 'app-add-session',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-session.component.html',
  styleUrl: './add-session.component.scss',
})
export class AddSessionComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionsService: SessionsService,
    private router: Router,
    private toastService: ToastService
  ) {}

  addSession(addSessionForm: NgForm) {
    const id = +(this.activatedRoute.snapshot.parent?.paramMap.get(
      'id'
    ) as string);

    const newSession = {
      ...addSessionForm.value,
      workshopId: id,
      upvoteCount: 0,
      sequenceId: +addSessionForm.value.sequenceId,
      duration: +addSessionForm.value.duration,
    } as Omit<ISession, 'id'>;

    console.log(newSession);

    this.sessionsService.addSession(newSession).subscribe({
      next: (addedSession) => {
        this.toastService.add({
          message: `Added session with id = ${addedSession.id}`,
          className: 'bg-success text-light',
          duration: 5000,
        });

        // You can also use navigateByUrl()
        this.router.navigate(['/workshops', id]);
      },
      error: (error) => {
        this.toastService.add({
          message: `Unable to add the session - ${error.message}`,
          className: 'bg-danger text-light',
          duration: 5000,
        });
      },
    });
  }
}
