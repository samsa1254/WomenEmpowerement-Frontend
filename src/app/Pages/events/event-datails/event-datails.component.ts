import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../../models/event.model';
import { EventService } from '../../../Services/event.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-datails',
  templateUrl: './event-datails.component.html',
  styleUrls: ['./event-datails.component.css']
})
export class EventDatailsComponent implements OnInit {

  id: number
  event: Event
  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.event = new Event();
    this.eventService.getEventById(this.id).subscribe( data => {
      this.event = data;
    });
  }

}


