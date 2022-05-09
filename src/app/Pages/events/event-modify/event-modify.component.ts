import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Event } from 'src/app/models/event.model';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-event-modify',
  templateUrl: './event-modify.component.html',
  styleUrls: ['./event-modify.component.css']
})
export class EventModifyComponent implements OnInit {
  id: number;
  offer: Event = new Event();
  constructor(private oService: EventService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.oService.getEventById(this.id).subscribe(data => {
      this.offer = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.oService.updateEvent(this.offer).subscribe( data =>{
      this.goToOfferList();
    }
    , error => console.log(error));
  }

  goToOfferList(){
    this.router.navigate(['/home/events']);
  }

}
