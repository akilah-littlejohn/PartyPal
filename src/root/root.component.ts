import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { EventDetailComponent } from 'src/event-detail/event-detail.component';
import { EventListComponent } from 'src/event-list/event-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone:true,
  imports:[EventListComponent]
})
export class RootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}