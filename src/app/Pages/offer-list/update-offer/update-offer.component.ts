import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../../../models/offer.model';
import { OfferService } from '../../../Services/offer-services.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {

  id: number;
   offer: Offer = new Offer();
   constructor(private oService: OfferService,
     private route: ActivatedRoute,
     private router: Router) { }

   ngOnInit(): void {
     this.id = this.route.snapshot.params['id'];

     this.oService.getOfferById(this.id).subscribe(data => {
       this.offer = data;
     }, error => console.log(error));
   }

   onSubmit(){
     this.oService.updateOffer(this.offer).subscribe( data =>{
       this.goToOfferList();
     }
     , error => console.log(error));
   }

   goToOfferList(){
     this.router.navigate(['/Offer']);
   }
}
