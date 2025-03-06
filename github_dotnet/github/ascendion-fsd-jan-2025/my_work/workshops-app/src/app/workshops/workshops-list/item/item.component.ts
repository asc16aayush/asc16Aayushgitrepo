import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LocationPipe } from '../../../common/location.pipe';
import IWorkshop from '../../models/IWorkshop';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [DatePipe, LocationPipe, RouterLink],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input()
  workshop!: IWorkshop;
}