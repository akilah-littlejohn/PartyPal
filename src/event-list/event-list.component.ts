import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

 
  @Output() eventSelected:EventEmitter<Event> = new EventEmitter()
  events: Event[] = [
    {
      id:1,
      title:'Wedding',
      date:new Date(),
      location: 'Miami, Florida',
      description:'string'
    },
    // Add more sample events
  ];

  selectEvent(event: Event): void {
    this.eventSelected.emit(event);
  }


}