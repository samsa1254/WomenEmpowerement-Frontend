import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Event } from '../../models/event.model';
import { EventService } from '../../Services/event.service';
import { Router } from '@angular/router';
>>>>>>> 99a929978bfe485d30c478ad80362f0ff908f0a1

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

}
=======
  Events: Event[];
  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.getEvents();
  }

  private getEvents(){
    this.eventService.getEventsList().subscribe(data => {
      this.Events = data;
    });
  }

  EventDetails(id: number){
    this.router.navigate(['home/detailsEvent', id]);
  }

  
  updateEvent(id: number){
    this.router.navigate(['home/updateEvent', id]);
  }

  deleteEvent(id: number){
    this.eventService.deleteEvent(id).subscribe( data => {
      console.log(data);
      this.getEvents();
    })
  }
}

>>>>>>> 99a929978bfe485d30c478ad80362f0ff908f0a1
