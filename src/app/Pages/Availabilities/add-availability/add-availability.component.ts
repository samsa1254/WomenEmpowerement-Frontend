import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Disponibilite } from '../../../models/disponibilite.model';
import { DisponibiliteService } from '../../../Services/disponibilite.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-add-availability',
  templateUrl: './add-availability.component.html',
  styleUrls: ['./add-availability.component.css']
})
export class AddAvailabilityComponent implements OnInit {

  Disp: Disponibilite = new Disponibilite();


  constructor(private dispService: DisponibiliteService, private router: Router) { }

  ngOnInit(): void {
  }

  saveDisp(){

    this.dispService.createdisp(this.Disp).subscribe( data =>{
      console.log(data);
      this.goToEventsList();
    },
    error => console.log(error));
  }

  goToEventsList(){
    this.router.navigate(['/home/Availibility/retrieve-all-disps']);
  }

  onSubmit(){
    console.log(this.Disp);
    this.saveDisp();
  }

}
