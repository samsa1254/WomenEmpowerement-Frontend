import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import {cagnotte} from "../models/cagnotte.model";

@Injectable({
  providedIn: 'root',
})
export class CagnotteService {
  private baseURL = 'http://localhost:8089/SpringMVC/Cagnotte/getAllCagnotte';
  private baseURL1 = 'http://localhost:8089/SpringMVC/Cagnotte/getCagnotteById';
  private BaseURL2 = 'http://localhost:8089/SpringMVC/Cagnotte/customerCard';
  private BaseURL3 = 'http://localhost:8089/SpringMVC/Cagnotte/pay/';
  private BaseURL4 =
    'http://localhost:8089/SpringMVC/Cagnotte/CreatecustomerStripe/';

  constructor(private httpClient: HttpClient) {}

  iduser: number;

  getCagnottesList(): Observable<cagnotte[]> {
    return this.httpClient.get<cagnotte[]>(`${this.baseURL}`);
  }

  createCagnotte(offer: cagnotte): Observable<Object> {
    return this.httpClient.post(
      `http://localhost:8089/SpringMVC/Cagnotte/addCagnotte`,
      offer
    );
  }

  getCagnotteById(id: number): Observable<cagnotte> {
    return this.httpClient.get<cagnotte>(`${this.baseURL1}/${id}`);
  }

  deleteCagnotte(id: number): Observable<Object> {
    return this.httpClient.delete(
      `http://localhost:8089/SpringMVC/Cagnotte/deleteCagnotte/${id}`
    );
  }


  CreateUserStripe(iduser: number, user: User): Observable<Object> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    return this.httpClient.post(
      `http://localhost:8089/SpringMVC/Cagnotte/CreatecustomerStripe/` + iduser, user ,this.httpOptions);
  }


  public CreateUserCardStripe(customerId, carta, expMonth, expYear, cvc) {
    return this.httpClient.post(
      'http://localhost:8089/SpringMVC/Cagnotte/customerCard/' +customerId +'/' +carta +'/' +expMonth +'/' +expYear +'/' +cvc, this.httpOptions);
  }

  pay(idc,carta,expMonth,expYear,cvc,userAmount) {
    return this.httpClient.post('http://localhost:8089/SpringMVC/Cagnotte/pay/'+idc +'/' +carta +'/' +expMonth +'/' +expYear +'/' +cvc+'/'+userAmount, this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
}
