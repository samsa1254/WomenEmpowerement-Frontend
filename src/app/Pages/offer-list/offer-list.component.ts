import { Component, OnInit } from '@angular/core';
import { Offer } from '../../models/offer.model';
import { OfferService } from '../../Services/offer-services.service';
import { CandidacyServicesService } from '../../Services/candidacy-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
 offers: Offer[];

  constructor(private oService: OfferService,private cService: CandidacyServicesService ,private router: Router) { }

  ngOnInit(): void {
    this.getOffers();
  }

  private getOffers(){
    this.oService.getOffersList().subscribe(data => {
      this.offers = data;
    });
  }

onTableDataChange(event: any) {
    this.page = event;
    this.getOffers();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getOffers();
  }

  offerDetails(id: number){
   this.cService.CandByOff(id).subscribe( data => {
             console.log(data);
           })
    this.router.navigate(['home/detailsoffer', id]);
  }

  updateOffer(id: number){
    this.router.navigate(['home/updateoffer', id]);
  }

   PostOffer(){
       this.cService.PostOff().subscribe( data => {
           console.log(data);
           this.getOffers();
         })
    }

  deleteOffer(id: number){
    this.oService.deleteOffer(id).subscribe( data => {
      console.log(data);
      this.getOffers();
    })
  }


  }
