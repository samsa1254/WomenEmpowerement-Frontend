import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Post} from "../models/post";
@Injectable({
  providedIn: 'root'
})
export class postsService {
  usersUrl="http://localhost:8081/SpringMVC/servlet/getAllUserNamesJPQL";
  constructor(private _http:HttpClient) { }
  getPosts() : Observable<Post[]>{
    return this._http.get<Post[]>("http://localhost:8089/SpringMVC/Publication/retrieve-all-pubs");
  }
}
