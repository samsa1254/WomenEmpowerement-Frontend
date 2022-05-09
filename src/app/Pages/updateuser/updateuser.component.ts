import { Component, OnInit } from '@angular/core';
import {userService} from "../../Services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user";

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {


  id: number;
  user: User = new User();
  constructor(private oService: userService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['iduser'];
    this.oService.getUserById(this.id).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.oService.updateUser(this.user).subscribe( data =>{
        this.goToUserList();
      }
      , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/home/user']);
  }

}
