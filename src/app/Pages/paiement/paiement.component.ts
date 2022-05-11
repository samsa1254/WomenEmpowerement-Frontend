import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { cagnotte } from '../../models/cagnotte.model';
import { CagnotteService } from '../../Services/cagnotte.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  idc: number;
  carta: string;
  expMonth: number;
  expYear: number;
  cvc: number;
  userAmount:number;

  token: string|undefined;

  constructor(private evService: CagnotteService, private router: Router) {
    this.token = undefined;
  }

  ngOnInit(): void {}

  Pay() {this.evService.pay(this.idc,this.carta,this.expMonth,this.expYear,this.cvc,this.userAmount).subscribe((data) => {
          console.log(data);
          this.goToPay();
        },
        (error) => {console.log(error);
          this.goToPay();
        }
      );
  }

  goToPay() {
    this.router.navigate(['/home/cagnottes']);
  }

  onSubmit() {
    this.Pay();
  }

//--- Recaptcha --- // 
public send(form: NgForm): void {
  if (form.invalid) {
    for (const control of Object.keys(form.controls)) {
      form.controls[control].markAsTouched();
    }
    return;
  }

  console.debug(`Token [${this.token}] generated`);
}

}
