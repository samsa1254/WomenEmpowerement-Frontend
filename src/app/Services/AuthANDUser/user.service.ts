import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions , Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "../../models/user";
import {Router} from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class userService {
  baseUrl="http://localhost:8089/SpringMVC/user/remove-User";
  baseUrl2="http://localhost:8089/SpringMVC/user/retrieve-User";
  baseUrl3="http://localhost:8089/SpringMVC/authenticate";
  baseUrl4="http://localhost:8089/SpringMVC/user/retrieve-me";

  private userUrl = 'http://localhost:8089/SpringMVC/user/retrieve-me';

  constructor(private _http:HttpClient, private router : Router) { }
  getUsers() : Observable<User[]>{
    return this._http.get<User[]>("http://localhost:8089/SpringMVC/user/retrieve-all-User");

  }

  deleteUserById(id:number){
    return
    this._http.delete("http://localhost:8089/SpringMVC/user/remove-User/"+id);
  }

  deleteStudent(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }



  createUser(user: User): Observable<Object>{
    return this._http.post(`http://localhost:8089/SpringMVC/user/add-User`, user );
  }

  getUserById(id: number): Observable<User>{
    return this._http.get<User>(`${this.baseUrl2}/${id}`);
  }

  updateUser(user: User): Observable<Object>{
    return this._http.put(`http://localhost:8089/SpringMVC/user/modify-User`, user);
  }

  updateStudent(user: User): Observable<Object> {
    return this._http.post(`http://localhost:8089/SpringMVC/user/modify-User`, user);
  }

  login(user : User) : Observable<any>
  {
    let url = this.baseUrl3 ;

    return this._http.post(url, user);

  }

  findme():Observable<any>{
    console.log(this._http.get<User>(this.baseUrl4));
    return this._http.get<User>(this.baseUrl4);

  }

  logout()
  {
    // Remove the token from the localStorage.
    localStorage.removeItem('token');

    this.router.navigate(['']);

  }

  /*
  * Check whether User is loggedIn or not.
  */
  getUserBoard(): Observable<any> {
    return this._http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<any> {
    return this._http.get(this.userUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this._http.get(this.userUrl, { responseType: 'text' });
  }

}
