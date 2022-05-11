import { Component, OnInit } from '@angular/core';
import { cagnotte } from '../../models/cagnotte.model';
import { CagnotteService } from '../../Services/cagnotte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cagnottes',
  templateUrl: './cagnottes.component.html',
  styleUrls: ['./cagnottes.component.css']
})
export class CagnottesComponent implements OnInit {

  offers: cagnotte[];

  constructor(private oService: CagnotteService, private router: Router) { }

  ngOnInit(): void {
    this.getOffers();
  }

  private getOffers(){
    this.oService.getCagnottesList().subscribe(data => {
      this.offers = data;
    });
  }

  offerDetails(id: number){
    this.router.navigate(['home/detailscagnotte', id]);
  }

  deleteOffer(id: number){
    this.oService.deleteCagnotte(id).subscribe( data => {
      console.log(data);
      this.getOffers();
    })
  }
// ------- Payement --------- // 
CreatCustomer (){
  this.router.navigate(['home/CreateCustomer']);
 }


 CreateCardStripe (){
  this.router.navigate(['home/CreateCard']);
 }

 Pay (){
  this.router.navigate(['home/Paiement']);
 }
  }