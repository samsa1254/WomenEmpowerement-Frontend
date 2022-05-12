 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
 import { Offer } from '../models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private baseURL = "http://localhost:8089/SpringMVC/Offers/RetrieveOffer";

  constructor(private httpClient: HttpClient) { }

  getOffersList(): Observable<Offer[]>{
    return this.httpClient.get<Offer[]>(`${this.baseURL}`);
  }

  createOffer(offer: Offer): Observable<Object>{
    return this.httpClient.post(`http://localhost:8089/SpringMVC/Offers/AddOffer`, offer );
  }

  getOfferById(id: number): Observable<Offer>{
    return this.httpClient.get<Offer>(`${this.baseURL}/${id}`);
  }

  updateOffer(id: number, offer: Offer): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, offer);
  }

  deleteOffer(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8089/SpringMVC/Offers/DeleteOffer/${id}`);
  }
  
}
