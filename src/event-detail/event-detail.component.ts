import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from 'src/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  standalone:true,
})
export class EventDetailComponent implements OnInit {
@Input() event: EventModel|null = null;
  constructor() { }

  ngOnInit() {
  }

}