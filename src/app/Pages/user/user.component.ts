import { Component, OnInit } from '@angular/core';
import {userService} from "../../Services/AuthANDUser/user.service";
import {User} from "../../models/user";
import { Router } from '@angular/router';
import {Observable, startWith, withLatestFrom} from "rxjs";
import {map} from "rxjs/operators";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  UserList : User[]=[];
  user : User ;
  studentlist:any;
  board: string;
  errorMessage: string;

  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];


  constructor(private userservice:userService , private router: Router ) { }

  ngOnInit(): void {
    this.userservice.getUserBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );

    this.userservice.getUsers().subscribe(
      (data: User[]) => { this.UserList = data ; console.log('aaaa',data) }
    );

  }

  /*
    deleteUser(id:number){
      this.userservice.deleteUserById(id).subscribe(()=>this.userservice.getUsers().subscribe(res=>{this.UserList=res})
      ); console.log('aaaa') ;}
*/
  deleteStudent(id: number) {
    this.userservice.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.userservice.getUsers().subscribe(data =>{
            this.UserList =data
          })
        },
        error => console.log(error));
  }
  updateUser(u: User){
    console.log("id = "+u.iduser)
    this.userservice.getUserById(u.iduser).subscribe(
      (data: User) => { this.user = data ; console.log('bbb',data) }
    );
    this.router.navigate(['home/user/updateuser/',u.iduser]);

  }


  updateStudent(id: number){
    this.userservice.getUserById(id)
      .subscribe(
        data => {
          this.studentlist=data
        },
        error => console.log(error));
  }

  onTableDataChange(user: any) {
    this.page = user;
    this.ngOnInit();
  }


}

