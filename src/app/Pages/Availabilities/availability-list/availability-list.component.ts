import { Component, OnInit } from '@angular/core';
import { Disponibilite } from 'app/models/disponibilite.model';
import { DisponibiliteService } from '../../../Services/disponibilite.service' ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-availability-list',
  templateUrl: './availability-list.component.html',
  styleUrls: ['./availability-list.component.css']
})
export class AvailabilityListComponent implements OnInit {

  disps: Disponibilite[];
  

  constructor(private dService: DisponibiliteService, private router: Router) { }

  ngOnInit(): void {
    this.getdisps();
  }

  private getdisps(){
    this.dService.getdispList().subscribe(data => {
      console.log(data);
      this.disps = data;


    });
  }

  

  updateOffer(id: number){
    this.router.navigate(['home/updateoffer', id]);
  }

  deletedisp(id: number){
    this.dService.deletedisp(id).subscribe( data => {
      console.log(data);
      this.getdisps();
    })
  }

}
