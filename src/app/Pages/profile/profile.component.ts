import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../Services/AuthANDUser/token-storage.service';
import {User} from "../../models/user";
import {userService} from "../../Services/AuthANDUser/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  errorMessage: string;
  board: string;
  user : User ;


  constructor(private userservice:userService , private router: Router,private token: TokenStorageService) { }

  ngOnInit(): void {
     sessionStorage.getItem("token");
    //console.log(sessionStorage.getItem("token"))
    this.userservice.findme().subscribe(
      (data: User) => { this.user = data ; console.log('aaaa',data) }
    );
  }

}
