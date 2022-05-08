import { Component, OnInit } from '@angular/core';
import { cagnotte } from '../../../models/cagnotte.model';
import { CagnotteService } from '../../../Services/cagnotte.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-cagnotte',
  templateUrl: './add-cagnotte.component.html',
  styleUrls: ['./add-cagnotte.component.css']
})
export class AddCagnotteComponent implements OnInit {

  Cagnot: cagnotte = new cagnotte();
  constructor(private evService: CagnotteService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEvent(){
    this.evService.createCagnotte(this.Cagnot).subscribe( data =>{
      console.log(data);
      this.goToEventsList();
    },
    error => console.log(error));
  }

  goToEventsList(){
    this.router.navigate(['/home/cagnottes']);
  }

  onSubmit(){
    console.log(this.Cagnot);
    this.saveEvent();
  }
}
