import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';
@Injectable({
  providedIn: 'root',
})
export class EventService {
  private baseURL = 'http://localhost:8089/SpringMVC/Event/getAllEvent';
  private baseURL1 = 'http://localhost:8089/SpringMVC/Event/getEventById';
  private baseURL2 = 'http://localhost:8089/SpringMVC/Event/modify-event';

  constructor(private httpClient: HttpClient) {}

  getEventsList(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`${this.baseURL}`);
  }

  createEvent(offer: Event): Observable<Object> {
    return this.httpClient.post(
      `http://localhost:8089/SpringMVC/Event/addEvent`,
      offer
    );
  }

  getEventById(id: number): Observable<Event> {
    return this.httpClient.get<Event>(`${this.baseURL1}/${id}`);
  }

  updateEvent(offer: Event): Observable<Object> {
    return this.httpClient.put(`${this.baseURL2}`, offer);
  }

  deleteEvent(id: number): Observable<Object> {
    return this.httpClient.delete(
      `http://localhost:8089/SpringMVC/Event/deleteEvent/${id}`
    );
  }

  PdfGenerate(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(
      `http://localhost:8089/SpringMVC/Event/pdfreport`
    );
  }

  Affectation(id, user): Observable<any> {
    return this.httpClient.post(
      `http://localhost:8089/SpringMVC/Event/addParticipant/${id}/`,user ,this.httpOptions);
  }

  SendMail(idEvent : number) {
    return this.httpClient.post(
      `http://localhost:8089/SpringMVC/Event/send/${idEvent}`,this.httpOptions);
  }

  2

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Affectation(idEvent ,iduser) {
  //   return this.httpClient.post('http://localhost:8089/SpringMVC/Event/addParticipant'+idEvent +'/' +iduser , this.httpOptions);
  // }
}
