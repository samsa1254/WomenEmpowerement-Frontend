import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../../models/post";
import {postsService} from "../../../Services/posts.service";

@Component({
  selector: 'app-updatepost',
  templateUrl: './updatepost.component.html',
  styleUrls: ['./updatepost.component.css']
})
export class UpdatepostComponent implements OnInit {

  idPublication: number;
  post: Post = new Post();
  constructor(private pService: postsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.idPublication = this.route.snapshot.params['idPublication'];

    this.pService.getPostById(this.idPublication).subscribe(data => {
      this.post =data;
    }, error => console.log(error));
  }

  updatepost(){
    this.pService.updatePost( this.post).subscribe( data =>{
        console.log(data);

      }
      , error => console.log(error));
  }

  goToPostList(){
    this.router.navigate(['/home/acceuil']);
  }
  onSubmit(){
    console.log(this.post);
    this.updatepost();
    this.goToPostList();
  }

}
