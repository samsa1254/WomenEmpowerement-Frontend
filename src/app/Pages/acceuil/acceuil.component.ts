import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {postsService} from "../../Services/posts.service";
<<<<<<< HEAD
=======
import {Router} from "@angular/router";
>>>>>>> 99a929978bfe485d30c478ad80362f0ff908f0a1

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  PostList : Post[]=[];
  post : Post ;
<<<<<<< HEAD
  constructor(private postservice:postsService ) { }

  ngOnInit(): void {

    this.postservice.getPosts().subscribe(
      (data: Post[]) => { this.PostList = data ; console.log('aaaa',data) }
    );



}}
=======
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
>>>>>>> 99a929978bfe485d30c478ad80362f0ff908f0a1
