import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { EventService } from '../../Services/event.service';
import { Router } from '@angular/router';
// import * as jsPDF from 'jspdf';
import { jsPDF } from 'jspdf';
import {User} from "../../models/user.model";



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  Events: Event[];
  env:Event;
  user : User;

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

  Affectation(id: number){
    this.router.navigate(['home/Affectation', id]);
  }

   SendMail(id:number){
    this.router.navigate(['home/SendMail', id]);
   }

  SavePdf():void{

  }



}


