import { Component, OnInit } from '@angular/core';
import {userService} from "../../Services/AuthANDUser/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  constructor(private oService: userService, private router: Router) { }

  idf : string ;
  ngOnInit(): void {

  }

  onSubmit(s: string) {
    this.oService.forgetpass(s).subscribe( data =>{
        console.log(data);
        this.goToLogin();

      },
      error => console.log(error));
  }

  goToLogin (){
    this.router.navigate(['/login'])
      .then(() => {
        window.location.reload();
      });
  }
}
