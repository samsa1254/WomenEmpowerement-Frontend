import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {Post} from "../../../models/post";
import {postsService} from "../../../Services/posts.service";
import {File} from "../../../models/File";

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  file:File[] ;
  post: Post = new Post();
  constructor(private pService: postsService, private router: Router) { }

  ngOnInit(): void {
  }

  savePost(){
    this.pService.createPost(this.post).subscribe( data =>{
        this.pService.findpostbypost(this.post.post).subscribe((data1 :Post)=>{
          console.log(data1);

          this.pService.affect(this.file,data1.idPublication).subscribe(); })

        this.goToPostList();
      },
      error => console.log(error));
  }

  goToPostList(){
    this.router.navigate(['/home/acceuil']);
  }

  upload(event) {
    this.file = event.target.files[0];
  }



  onSubmit(){
    console.log(this.post);
    this.savePost();
  }

}
