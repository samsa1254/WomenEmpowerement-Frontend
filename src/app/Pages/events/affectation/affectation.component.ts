import { Component, OnInit } from '@angular/core';
import { Event } from '../../../models/event.model';
import { EventService } from '../../../Services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css'],
})
export class AffectationComponent implements OnInit {
  Events: Event[];
  env: Event = new Event();
  user: User = new User();
  id: number
  event: Event
  iduser: number 

  constructor(private eventService: EventService, private router: Router , private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.event = new Event();
    this.eventService.getEventById(this.id).subscribe( data => {
      this.event = data;
    });


  }

  Affectation() {
    this.eventService.Affectation(this.id, this.user).subscribe(
      (data) => {
        console.log(data);
        this.goToEventsList();
      },
      (error) => console.log(error)
    );
  }

  goToEventsList() {
    this.router.navigate(['/home/events']);
  }

  onSubmit() {
    console.log(this.env);
    this.Affectation();
  }
}
