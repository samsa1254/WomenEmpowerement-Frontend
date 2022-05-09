import { Component, OnInit } from '@angular/core';
import { Offer } from '../../models/offer.model';
import { OfferService } from '../../Services/offer-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

 offers: Offer[];

  constructor(private oService: OfferService, private router: Router) { }

  ngOnInit(): void {
    this.getOffers();
  }

  private getOffers(){
    this.oService.getOffersList().subscribe(data => {
      this.offers = data;
    });
  }

  offerDetails(id: number){
    this.router.navigate(['home/detailsoffer', id]);
  }

  updateOffer(id: number){
    this.router.navigate(['home/updateoffer', id]);
  }

  deleteOffer(id: number){
    this.oService.deleteOffer(id).subscribe( data => {
      console.log(data);
      this.getOffers();
    })
  }
  }
