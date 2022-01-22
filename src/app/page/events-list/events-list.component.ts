import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event'

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventList: Event[];

  constructor(
    private eService: EventService
  ) { 
    this.eventList = this.eService.getAll();
  }

  ngOnInit(): void {
  }

}
