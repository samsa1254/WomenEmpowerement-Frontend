import { Component, OnInit } from '@angular/core';
import { userService } from '../../Services/AuthANDUser/user.service';
import {User} from "../../models/user";
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user: User = new User();
  constructor(private oService: userService, private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    console.log("test"+this.user.role)
    this.oService.createUser(this.user).subscribe( data =>{
        console.log(data);
        //window.location.reload();
        this.goToUserList();
      },
      error => console.log(error));
  }

  goToUserList (){
    this.router.navigate(['/home/user'])
      .then(() => {
      window.location.reload();
    });
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }


}
