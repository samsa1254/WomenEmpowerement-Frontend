import { Component, OnInit } from '@angular/core';
import { Report } from 'app/models/report.model';
import { ReportService } from '../../../Services/report.service' ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  reps: Report[];
  

  constructor(private repService: ReportService, private router: Router) { }

  ngOnInit(): void {
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


