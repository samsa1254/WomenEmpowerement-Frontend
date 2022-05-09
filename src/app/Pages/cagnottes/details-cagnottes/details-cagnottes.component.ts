import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cagnotte } from '../../../models/cagnotte.model';
import { CagnotteService } from '../../../Services/cagnotte.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-cagnottes',
  templateUrl: './details-cagnottes.component.html',
  styleUrls: ['./details-cagnottes.component.css']
})
export class DetailsCagnottesComponent implements OnInit {

  id: number
  cagnot: cagnotte
  constructor(private route: ActivatedRoute, private oService: CagnotteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cagnot = new cagnotte();
    this.oService.getCagnotteById(this.id).subscribe( data => {
      this.cagnot = data;
    });
  }
}
