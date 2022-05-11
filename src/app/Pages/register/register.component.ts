import { Component, OnInit } from '@angular/core';
import {SignUpInfo} from "../../models/SignUpInfo";
import {AuthService} from "../../Services/AuthANDUser/auth.service";
import {User} from "../../models/user";
import {userService} from "../../Services/AuthANDUser/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  constructor(private oService: userService, private router: Router) { }

  ngOnInit(): void {
    this.user.role='women' ;
    this.user.sexe='Women';
    this.user.isEnabled='false' ;

  }

  saveUser(){
    console.log("test"+this.user.role)
    this.oService.createUser(this.user).subscribe( data =>{
        console.log(data);
        this.goToLogin();

      },
      error => console.log(error));
  }


  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

  goToLogin (){
    this.router.navigate(['/login'])
      .then(() => {
        window.location.reload();
      });
  }

}
