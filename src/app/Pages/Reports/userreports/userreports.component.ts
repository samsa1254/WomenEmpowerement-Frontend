import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from 'app/models/report.model';
import { ReportService } from 'app/Services/report.service';
import { NgxPaginationModule } from 'ngx-pagination';
import {User} from "../../../models/user";
import {postsService} from "../../../Services/posts.service";
import {TokenStorageService} from "../../../Services/AuthANDUser/token-storage.service";
import {userService} from "../../../Services/AuthANDUser/user.service";

@Component({
  selector: 'app-userreports',
  templateUrl: './userreports.component.html',
  styleUrls: ['./userreports.component.css']
})
export class UserreportsComponent implements OnInit {
  user : User = new User() ;
  reps: Report[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private repService: ReportService,private router: Router ,private token: TokenStorageService,private userservice:userService) { }

  ngOnInit(): void {

    sessionStorage.getItem("token");
    //console.log(sessionStorage.getItem("token"))
    this.userservice.findme().subscribe(
      (data: User) => { this.user = data ;this.getuserreps(data.iduser) }
    );


  }

  private getuserreps(id: number){
    this.repService.getuserrepList(id).subscribe(data => {
      console.log("5rza"+data);
      this.reps = data;


    });
  }



  updaterep(id: number){
    this.router.navigate(['home/Report/updateReport', id]);
  }

  deleterep(id: number){
    if(confirm("are you sure to cancel the report ?")==true){
    this.repService.deleterep(id).subscribe( data => {
      console.log(data);
      this.getuserreps(this.user.iduser);
    }) }
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getuserreps(this.user.iduser);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getuserreps(this.user.iduser);
  }


}
