import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Report } from 'app/models/report.model';
import { ReportService } from 'app/Services/report.service';

@Component({
  selector: 'app-treatrepbyunblocking',
  templateUrl: './treatrepbyunblocking.component.html',
  styleUrls: ['./treatrepbyunblocking.component.css']
})
export class TreatrepbyunblockingComponent implements OnInit {

  id: number
  rep: Report
  id_user : number ;
  constructor(private route: ActivatedRoute, private repService: ReportService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.rep = new Report();
    this.repService.getrepById(this.id).subscribe( data => {
      this.rep = data;
    });
  }

  treatReportbyunblocking(){
    
    this.rep.status="treated" ;
    console.log(this.rep);
    console.log(this.id_user);
    this.repService.treatReportbyunblocking(this.rep,this.id_user).subscribe( data => {
     console.log(data);
    });
  }

}
