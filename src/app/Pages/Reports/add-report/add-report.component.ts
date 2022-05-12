import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from 'app/models/report.model';
import { ReportService } from 'app/Services/report.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {

  rep: Report = new Report();
  
  
  constructor(private repService: ReportService, private router: Router) { }

  ngOnInit(): void {
  }

  saverep(){
   this.rep.status="not treated";
   this.rep.reportDate= new Date();
    this.repService.createrep(this.rep).subscribe( data =>{
      this.goTorepList();
      alert("report added");
    },
    error => console.log(error));
  }

  goTorepList(){
    this.router.navigate(['/home/Report/myreports']);
  }

  onSubmit(){
    console.log(this.rep);
    this.saverep();
  }

}
