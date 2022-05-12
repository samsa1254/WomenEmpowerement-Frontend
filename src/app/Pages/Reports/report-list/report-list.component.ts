import { Component, OnInit } from '@angular/core';
import { Report } from 'app/models/report.model';
import { ReportService } from '../../../Services/report.service' ;
import { Router } from '@angular/router';
import {User} from "../../../models/user";
import {CandidacyServicesService} from "../../../Services/candidacy-services.service";
import {userService} from "../../../Services/AuthANDUser/user.service";
import {TokenStorageService} from "../../../Services/AuthANDUser/token-storage.service";

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  reps: Report[];
  user : User ;


  constructor(private repService: ReportService , private userservice:userService , private router: Router,private token: TokenStorageService) { }

  ngOnInit(): void {
    sessionStorage.getItem("token");
    //console.log(sessionStorage.getItem("token"))
    this.userservice.findme().subscribe(
      (data: User) => { this.user = data ; console.log('aaaa',data) }
    );

    this.getreps();
  }

  private getreps(){
    this.repService.getrepList().subscribe(data => {
      console.log(data);
      this.reps = data;


    });
  }



  updateOffer(id: number){
    this.router.navigate(['home/updateoffer', id]);
  }

  deleterep(id: number){
    this.repService.deleterep(id).subscribe( data => {
      console.log(data);
      this.getreps();
    })
  }

  TreatReportByblocking(id: number){
    this.router.navigate(['home/Report/treatbyblockinguser', id]);
  }

  TreatReportByUnblocking(id: number){
    this.router.navigate(['home/Report/treatbyunblockinguser', id]);
  }



}


