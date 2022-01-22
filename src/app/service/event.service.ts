import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventList: Event[] = [
    {
      name: "Morning Yoga Bp",
      date: "02. 02. 2022",
      time: "09:00",
      location: {
        address: "Fő út 1.",
        city: "Budapest",
        country: "Hungary"
      }
    },
    {
      name: "Yoga Flow Berlin",
      date: "02. 12. 2022",
      time: "14:00",
      location: {
        address: "Hauptstr. 10.",
        city: "Berlin",
        country: "Germany"
      }
    },
    {
      name: "Evening Yoga London",
      date: "02. 22. 2022",
      time: "19:00",
      location: {
        address: "100 Main St",
        city: "London",
        country: "England"
      }
    }
  ]

  constructor() { }

  getAll(): Event[] {
    return this.eventList;
  }
}

/* Legyen egy getAll metódusa, amely legalább 
három esemény tömbjét adja vissza, ami 
megfelel a saját Event osztályunknak.
Az adatok lehetnek szabadon választottak. */