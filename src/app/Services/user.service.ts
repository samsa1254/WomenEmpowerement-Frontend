import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions , Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "../models/user";
import {Router} from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class userService {
  baseUrl="http://localhost:8089/SpringMVC/user/remove-User";
  baseUrl2="http://localhost:8089/SpringMVC/user/retrieve-User";
  baseUrl3="http://localhost:8089/SpringMVC/authenticate";

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

  logout()
  {
    // Remove the token from the localStorage.
    localStorage.removeItem('token');

    this.router.navigate(['']);

  }

  /*
  * Check whether User is loggedIn or not.
  */

  isLoggedIn() {

    // create an instance of JwtHelper class.
    let jwtHelper = new JwtHelperService();

    // get the token from the localStorage as we have to work on this token.
    let token = localStorage.getItem('token');

    // check whether if token have something or it is null.
    if(!token)
    {
      return false;
    }

    // get the Expiration date of the token by calling getTokenExpirationDate(String) method of JwtHelper class. this method accepts a string value which is nothing but a token.

    if(token)
    {
      let expirationDate = jwtHelper.getTokenExpirationDate(token);

      // check whether the token is expired or not by calling isTokenExpired() method of JwtHelper class.

      let isExpired = jwtHelper.isTokenExpired(token);

      return !isExpired;
    }
    return true ;
  }

  getAdminDetail(adminId) : Observable<any>
  {
    let url = this.baseUrl + "getAdminData/" + adminId;

    // create an instance of Header object.
    let headers = new Headers();

    // get token from localStorage.
    let token = localStorage.getItem('token');

    // Append Authorization header.
    headers.append('Authorization' , 'Bearer ' + token);

    // create object of RequestOptions and include that in it.
    let options = new RequestOptions( { headers : headers } );

   // return this._http.get(url , options);

    return this._http.get(url );
  }
}
