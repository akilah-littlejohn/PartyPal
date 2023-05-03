import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from '../event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class EventDetailComponent implements OnInit {
@Input() event: EventModel|null = null;
  constructor() { }

  ngOnInit() {
  }

}