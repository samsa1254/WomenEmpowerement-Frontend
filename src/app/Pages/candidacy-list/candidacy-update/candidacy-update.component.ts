import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidacy } from '../../../models/candidacy';
import { CandidacyServicesService } from '../../../Services/candidacy-services.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidacy-update',
  templateUrl: './candidacy-update.component.html',
  styleUrls: ['./candidacy-update.component.css']
})
export class CandidacyUpdateComponent implements OnInit {

    id: number;
    c: Candidacy = new Candidacy();
    constructor(private cService: CandidacyServicesService,
      private route: ActivatedRoute,
      private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.cService.getCandById(this.id).subscribe(data => {
        this.c = data;
      }, error => console.log(error));
    }

    onSubmit(){
      this.cService.updateCand(this.c).subscribe( data =>{
        this.goToCList();
      }
      , error => console.log(error));
    }

    goToCList(){
      this.router.navigate(['/home/candidacy']);
    }

}
