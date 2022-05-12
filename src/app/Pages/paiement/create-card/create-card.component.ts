import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { cagnotte } from '../../../models/cagnotte.model';
import { CagnotteService } from '../../../Services/cagnotte.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
})
export class CreateCardComponent implements OnInit {
  customerId: string;
  carta: string;
  expMonth: string;
  expYear: string;
  cvc: string;
  constructor(private evService: CagnotteService, private router: Router) {}

  ngOnInit(): void {}
  CreateUserCardStripe() {this.evService.CreateUserCardStripe(this.customerId,this.carta,this.expMonth,this.expYear,this.cvc).subscribe((data) => {
          console.log(data);
          this.goToPay();
        },
        (error) => {console.log(error);
          this.goToPay();
        }
      );
  }

  goToPay() {
    this.router.navigate(['/home/Paiement']);
  }

  onSubmit() {
    this.CreateUserCardStripe();
  }
}
