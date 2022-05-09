import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {postsService} from "../../Services/posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  PostList : Post[]=[];
  post : Post ;
  constructor(private postservice:postsService,private router: Router ) { }

  ngOnInit(): void {

    this.getPosts();
  }






  private getPosts(){
    let list2 : Post[];
    this.postservice.getPosts().subscribe(data => {

        this.PostList = data.reverse();
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
}



