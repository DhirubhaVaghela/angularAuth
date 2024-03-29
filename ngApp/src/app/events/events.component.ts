import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private eventService: EventsService) { }

  events = []
  ngOnInit() {

    this.eventService.getEvents()
    .subscribe (
      res => this.events = res,
      err => console.log(err)
    )
  }



}
