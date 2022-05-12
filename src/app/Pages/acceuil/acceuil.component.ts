import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {postsService} from "../../Services/posts.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../Services/AuthANDUser/token-storage.service";
import {User} from "../../models/user";
import {userService} from "../../Services/AuthANDUser/user.service";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  PostList : Post[]=[];
  update : boolean = false ;
  post : Post ;
  user : User ;

  constructor(private userservice:userService ,private postservice:postsService,private router: Router ,private token: TokenStorageService) { }

  ngOnInit(): void {
    sessionStorage.getItem("token");
    //console.log(sessionStorage.getItem("token"))
    this.userservice.findme().subscribe(
      (data: User) => { this.user = data ; console.log('aaaa',data) }
    );
    this.getPosts();
  }






  private getPosts(){


    let list2 : Post[];
    this.postservice.getPosts().subscribe(data => {
        this.userservice.getUserById(1);
        this.PostList = data;
        console.log(this.PostList);
      }
    );
  }
  updatepost(idPublication: number){
    this.router.navigate(["home/updatepost", idPublication]);
  }

  deletePost(idPublication: number){
    this.postservice.deletePost(idPublication).subscribe( data => {
      console.log(data);
      this.getPosts();
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getPosts();
  }
  explore(){
    this.update=!this.update;
  }
}


