import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'app/models/report.model';
import { ReportService } from 'app/Services/report.service';

@Component({
  selector: 'app-update-report',
  templateUrl: './update-report.component.html',
  styleUrls: ['./update-report.component.css']
})
export class UpdateReportComponent implements OnInit {

  id: number;
   rep: Report = new Report();
   constructor(private rService: ReportService,
     private route: ActivatedRoute,
     private router: Router) { }

   ngOnInit(): void {
     this.id = this.route.snapshot.params['id'];

     this.rService.getrepById(this.id).subscribe(data => {
       this.rep = data;
     }, error => console.log(error));
   }

   onSubmit(){
     this.rService.updaterep(this.id, this.rep).subscribe( data =>{
       console.log(data);
     }
     , error => console.log(error));
   }

   goToOfferList(){
     this.router.navigate(['/Offer']);
   }

}
