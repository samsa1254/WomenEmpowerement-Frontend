import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Post} from "../models/post";
import {File} from "../models/File";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class postsService {
  usersUrl="http://localhost:8081/SpringMVC/servlet/getAllUserNamesJPQL";
  constructor(private httpClient:HttpClient) { }
  getPosts() : Observable<Post[]>{
    return this.httpClient.get<Post[]>("http://localhost:8089/SpringMVC/Publication/retrieve-all-pubs");
  }
  createPost(post: Post): Observable<Object>{
    return this.httpClient.post("http://localhost:8089/SpringMVC/Publication/add-pub", post );
  }
  getPostById(idPublication: number): Observable<Post>{
    return this.httpClient.get<Post>("http://localhost:8089/SpringMVC/Publication/retrieve-pub/"+idPublication);
  }
  updatePost( post: Post): Observable<Object>{
    return this.httpClient.put("http://localhost:8089/SpringMVC/Publication/modify-pub", post);
  }
  deletePost(idPublication: number): Observable<Object>{
    return this.httpClient.delete("http://localhost:8089/SpringMVC/Publication/remove-pub/"+idPublication);
  }
  upload(file:File[])  : Observable<Object>{
   return this.httpClient.post("http://localhost:8089/SpringMVC/File",file);
  }

  affect ( file:File[],idPublication:number):Observable<Object>{
    const headers= new HttpHeaders()
      .set('content-type', 'undefined');
    return this.httpClient.post("http://localhost:8089/SpringMVC/File/"+idPublication,file,{ 'headers': headers });

  }
  findpostbypost(post:string) : Observable<Object>
  {
    return this.httpClient.get("http://localhost:8089/SpringMVC/Publication/retrieve-pubbypost/"+post);
  }

}
