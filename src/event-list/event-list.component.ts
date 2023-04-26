import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventModel } from 'src/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

 
  @Output() eventSelected:EventEmitter<Event> = new EventEmitter()
  events: EventModel[] = [
    {
      id:1,
      title:'Wedding',
      date:new Date(),
      location: 'Miami, Florida',
      description:'string',
      guest: {
        firstName:'Luther',
        lastName:'Campbell',
        age:21,
        drinkPackage:true
      }
    },
    {
      id:2,
      title:'Bar Mitzvah',
      date:new Date(),
      location: 'Manhattan, New York',
      description:'string',
      guest: {
        firstName:'Drake',
        lastName:'Aubrey',
        age:21,
        drinkPackage:true
      }
    },
   
  ];

  selectEvent(event: Event): void {
    this.eventSelected.emit(event);
  }
ngOnInit(){}

}