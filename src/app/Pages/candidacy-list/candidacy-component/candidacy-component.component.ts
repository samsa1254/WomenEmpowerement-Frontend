import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidacy } from 'src/app/models/candidacy';
import { CandidacyServicesService } from 'src/app/Services/candidacy-services.service';
import { Offer } from 'src/app/models/offer.model';
@Component({
  selector: 'app-candidacy-component',
  templateUrl: './candidacy-component.component.html',
  styleUrls: ['./candidacy-component.component.css']
})
export class CandidacyComponentComponent implements OnInit {

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  c: Candidacy[];

  constructor(private cService: CandidacyServicesService, private router: Router) { }

  ngOnInit(): void {
    this.getcand();
  }

  private getcand(){
    this.cService.getCandidList().subscribe((allData)=>
      {
        console.log(allData)
        this.c=allData
      })
  }

onTableDataChange(event: any) {
    this.page = event;
    this.getcand();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getcand();
  }

  Approve(id: number, s: number){
   this.getcand();
  }

  updateCand(id: number){
    this.router.navigate(['home/updatecandidacy', id]);
  }

  deleteCandid(id: number){
    this.cService.deleteCand(id).subscribe( data => {
      console.log(data);
      this.getcand();
    })
  }
  ApproveCand(id: number, s:number){
  this.cService.ApproveCandid(id , s).subscribe(data=>{console.log(data);this.getcand();})
  this.getcand();
  }





}
