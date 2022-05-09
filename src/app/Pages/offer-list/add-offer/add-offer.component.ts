import { Component, OnInit } from '@angular/core';
import { Offer } from '../../../models/offer.model';
import { OfferService } from '../../../Services/offer-services.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
offer: Offer = new Offer();
  constructor(private oService: OfferService, private router: Router) { }

  ngOnInit(): void {
  }

  saveOffer(){
    this.oService.createOffer(this.offer).subscribe( data =>{
      console.log(data);
      this.goToOfferList();
    },
    error => console.log(error));
  }

  goToOfferList(){
    this.router.navigate(['/offers']);
  }

  onSubmit(){
    console.log(this.offer);
    this.saveOffer();
  }
}
