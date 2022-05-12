import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../Services/AuthANDUser/token-storage.service";
import {userService} from "../../Services/AuthANDUser/user.service";

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit {
   user : User ;

  constructor(private router: Router,private token: TokenStorageService, private userservice:userService) { }

  ngOnInit(): void {
    sessionStorage.getItem("token");
    //console.log(sessionStorage.getItem("token"))
    this.userservice.findme().subscribe(
      (data: User) => { this.user = data ; console.log('aaaa',data) }
    );
  }


}
