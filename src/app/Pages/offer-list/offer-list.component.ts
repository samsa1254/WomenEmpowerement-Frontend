import { Component, OnInit } from '@angular/core';
import { Offer } from '../../models/offer.model';
import { OfferService } from '../../Services/offer-services.service';
import { CandidacyServicesService } from '../../Services/candidacy-services.service';
import { Router } from '@angular/router';
import {userService} from "../../Services/AuthANDUser/user.service";
import {TokenStorageService} from "../../Services/AuthANDUser/token-storage.service";
import {User} from "../../models/user";

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
  user : User ;

  constructor(private oService: OfferService,private cService: CandidacyServicesService , private userservice:userService , private router: Router,private token: TokenStorageService) { }

  ngOnInit(): void {

    sessionStorage.getItem("token");
    //console.log(sessionStorage.getItem("token"))
    this.userservice.findme().subscribe(
      (data: User) => { this.user = data ; console.log('aaaa',data) }
    );

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

  Posti(id: number){
    this.cService.PostOff2(id , this.user.iduser).subscribe(data=>{console.log(data);})
   // this.getcand();
  }

  deleteOffer(id: number){
    this.oService.deleteOffer(id).subscribe( data => {
      console.log(data);
      this.getOffers();
    })
  }


  }
