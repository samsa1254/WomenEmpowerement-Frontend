import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from 'app/models/report.model';
import { ReportService } from 'app/Services/report.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-userreports',
  templateUrl: './userreports.component.html',
  styleUrls: ['./userreports.component.css']
})
export class UserreportsComponent implements OnInit {

  reps: Report[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private repService: ReportService, private router: Router) { }

  ngOnInit(): void {
    this.getuserreps();
  }

  private getuserreps(){
    this.repService.getuserrepList().subscribe(data => {
      console.log(data);
      this.reps = data;


    });
  }

  

  updaterep(id: number){
    this.router.navigate(['home/Report/updateReport', id]);
  }

  deleterep(id: number){
    if(confirm("are you sure to cancel the report ?")==true){
    this.repService.deleterep(id).subscribe( data => {
      console.log(data);
      this.getuserreps(); 
    }) }
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getuserreps();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getuserreps();
  }
  

}
