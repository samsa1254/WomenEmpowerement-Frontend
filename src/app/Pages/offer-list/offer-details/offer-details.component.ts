import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../../../models/offer.model';
import { OfferService } from '../../../Services/offer-services.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {

  id: number
  offer: Offer
  constructor(private route: ActivatedRoute, private oService: OfferService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.offer = new Offer();
    this.oService.getOfferById(this.id).subscribe( data => {
      this.offer = data;
    });
  }
}
