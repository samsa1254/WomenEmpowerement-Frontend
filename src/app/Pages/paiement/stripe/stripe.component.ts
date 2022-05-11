import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { cagnotte } from '../../../models/cagnotte.model';
import { CagnotteService } from '../../../Services/cagnotte.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css'],
})
export class StripeComponent implements OnInit {
  user: User = new User();
  body: string;
  id: Number;
  constructor(private evService: CagnotteService, private router: Router) {}

  ngOnInit(): void {}

  CreateCustomer() {
    this.evService
      .CreateUserStripe(this.user.iduser, this.user)
      .subscribe((data) => {
        console.log(data);
        this.goToCreateCard();
        let body = JSON.parse(JSON.stringify(data)).Responsebody;
      console.log(body);  
      });
  }

  goToCreateCard(){
    this.router.navigate(['/home/CreateCard']);
  }

  onSubmit() {
    console.log(this.user);
    this.CreateCustomer();
  }
}
