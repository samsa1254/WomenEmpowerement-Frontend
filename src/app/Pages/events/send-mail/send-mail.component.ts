import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../../models/event.model';
import { EventService } from '../../../Services/event.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  id: number;
  event: Event = new Event();
  constructor(private oService: EventService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.oService.getEventById(this.id).subscribe(data => {
      this.event = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.oService.SendMail(this.id).subscribe( data =>{
      this.goToOfferList();
    }
    , error => console.log(error));
  }

  goToOfferList(){
    this.router.navigate(['/home/events']);
  }

}
