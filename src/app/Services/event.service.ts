import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  // private baseURL = "http://localhost:8089/SpringMVC/Event/getAllEvent";

  // private baseURL1 ='http://localhost:8089/SpringMVC/Event/getEventById';

  // constructor(private httpClient: HttpClient) { }

  // getEventsList(): Observable<Event[]>{
  //   return this.httpClient.get<Event[]>(`${this.baseURL}`);
  // }

  // createEvent(event: Event): Observable<Object>{
  //   return this.httpClient.post(`http://localhost:8089/SpringMVC/Event/addEvent`, event );
  // }

  // getEventById(id: number): Observable<Event>{
  //   return this.httpClient.get<Event>(`${this.baseURL1}/${id}`);
  // }

  // updateEvent(id: number, event: Event): Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/${id}`, event);
  // }

  // deleteEvent(id: number): Observable<Object>{
  //   return this.httpClient.delete(`http://localhost:8089/SpringMVC/Event/deleteEvent/${id}`);
  // }


  private baseURL = "http://localhost:8089/SpringMVC/Event/getAllEvent";
  private baseURL1 ='http://localhost:8089/SpringMVC/Event/getEventById';
  private baseURL2 ='http://localhost:8089/SpringMVC/Event/modify-event';
  

  constructor(private httpClient: HttpClient) { }
 
  getEventsList(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${this.baseURL}`);
  }
 
  createEvent(offer: Event): Observable<Object>{
    return this.httpClient.post(`http://localhost:8089/SpringMVC/Event/addEvent`, offer );
  }
 
  getEventById(id: number): Observable<Event>{
    return this.httpClient.get<Event>(`${this.baseURL1}/${id}`);
  }
 
  updateEvent( offer: Event): Observable<Object>{
    return this.httpClient.put(`${this.baseURL2}`, offer);
  }
 
  deleteEvent(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8089/SpringMVC/Event/deleteEvent/${id}`);
  }

}




