import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Event } from '../../../models/event.model';
import { EventService } from '../../../Services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  offer: Event = new Event();
  constructor(private evService: EventService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEvent(){
    this.evService.createEvent(this.offer).subscribe( data =>{
      console.log(data);
      this.goToEventsList();
    },
    error => console.log(error));
  }

  goToEventsList(){
    this.router.navigate(['/home/events']);
  }

  onSubmit(){
    console.log(this.offer);
    this.saveEvent();
  }
}
