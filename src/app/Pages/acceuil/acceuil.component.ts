import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {postsService} from "../../Services/posts.service";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  PostList : Post[]=[];
  post : Post ;
  constructor(private postservice:postsService ) { }

  ngOnInit(): void {

    this.postservice.getPosts().subscribe(
      (data: Post[]) => { this.PostList = data ; console.log('aaaa',data) }
    );



}}
