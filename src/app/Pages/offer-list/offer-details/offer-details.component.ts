import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../../../models/offer.model';
import { OfferService } from '../../../Services/offer-services.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {Candidacy} from "../../../models/candidacy";
import {CandidacyServicesService} from "../../../Services/candidacy-services.service";


@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  c: Candidacy[];
  id: number
  offer: Offer
  constructor(private cService: CandidacyServicesService,private router: Router,private oService: OfferService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ListCand(this.id);
    this.offer = new Offer();
    this.oService.getOfferById(this.id).subscribe( data => {
      this.offer = data;
    });
  }
private ListCand(id: number){
this.cService.CandByOff(id).subscribe((allData)=>
 {
       console.log(allData)
       this.c=allData
 })}

updateCand(id: number){
    this.router.navigate(['home/updatecandidacy', id]);
  }

  deleteCandid(id: number){
    this.cService.deleteCand(id).subscribe( data => {
      console.log(data);
       window.location.reload();

    })
  }

}
