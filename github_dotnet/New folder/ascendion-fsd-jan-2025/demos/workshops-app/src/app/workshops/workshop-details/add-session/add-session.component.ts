import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

import { ToastService } from '../../../common/toast.service';

import { SessionsService } from '../../sessions.service';
import ISession from '../../models/ISession';

function durationAndLevel(form: AbstractControl) {
  const durationStr = (form.get('duration') as AbstractControl).value;
  const duration = +durationStr;
  const level = (form.get('level') as AbstractControl).value;

  // if valid -> return null
  // if invalid -> return an object with the details of the error. Further this object should have the property called `durationAndLevel`
  if (durationStr === '' || level === '') {
    return null;
  }

  if (level === 'Basic') {
    return null;
  }

  if (level === 'Intermediate') {
    if (duration >= 2) {
      return null;
    }

    // error
    return {
      durationAndLevel:
        'Intermediate level session should be at least 2 hours in duration',
    };
  }

  if (level === 'Advanced') {
    if (duration >= 3) {
      return null;
    }

    // error
    return {
      durationAndLevel:
        'Advanced level session should be at least 3 hours in duration',
    };
  }

  return null;
}

@Component({
  selector: 'app-add-session',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './add-session.component.html',
  styleUrl: './add-session.component.scss',
})
export class AddSessionComponent {
  addSessionForm: FormGroup;

  // helper accessor methods
  get sequenceId() {
    return this.addSessionForm.get('sequenceId') as FormControl;
  }

  get name() {
    return this.addSessionForm.get('name') as FormControl;
  }

  get speaker() {
    return this.addSessionForm.get('speaker') as FormControl;
  }

  get duration() {
    return this.addSessionForm.get('duration') as FormControl;
  }

  get level() {
    return this.addSessionForm.get('level') as FormControl;
  }

  get abstract() {
    return this.addSessionForm.get('abstract') as FormControl;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionsService: SessionsService,
    private router: Router,
    private toastService: ToastService,
    private fb: FormBuilder
  ) {
    this.addSessionForm = this.fb.group(
      {
        sequenceId: [
          '', // initial value of the input
          [
            // the list of validators
            Validators.required,
            Validators.pattern('\\d+'),
          ],
        ],
        name: [
          '',
          [Validators.required, Validators.pattern('[A-Z][A-Za-z ]+')],
        ],
        speaker: [
          '',
          [
            Validators.required,
            Validators.pattern('[A-Z][A-Za-z ]+(,[A-Z ][A-Za-z ]+)*'),
          ],
        ],
        duration: [
          '',
          [Validators.required, Validators.min(0.5), Validators.max(10)],
        ],
        level: ['', [Validators.required]],
        abstract: ['', [Validators.required, Validators.minLength(2)]],
      },
      {
        // setting up cross-field validators
        validators: durationAndLevel,
      }
    );
  }

  addSession() {
    const id = +(this.activatedRoute.snapshot.parent?.paramMap.get(
      'id'
    ) as string);

    const newSession = {
      workshopId: id,
      upvoteCount: 0,
      sequenceId: +this.sequenceId.value,
      speaker: this.speaker.value,
      name: this.name.value,
      level: this.level.value,
      duration: +this.duration.value,
      abstract: this.abstract.value,
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
