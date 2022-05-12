import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disponibilite } from '../models/disponibilite.model';


@Injectable({
  providedIn: 'root'
})
export class DisponibiliteService {

  private baseURL = "http://localhost:8089/SpringMVC/Availibility/retrieve-all-disps";
  private baseURL1 = "http://localhost:8089/SpringMVC/Availibility/retrieve-disp";
  private baseURL2 ='http://localhost:8089/SpringMVC/Event/getEventById';
  private baseURL3 ='http://localhost:8089/SpringMVC/Event/modify-event';

  constructor(private httpClient: HttpClient) { }

  getdispList(): Observable<Disponibilite[]>{
    return this.httpClient.get<Disponibilite[]>(`${this.baseURL}`);
  }

  createdisp(disp: Disponibilite): Observable<Object>{
    return this.httpClient.post(`http://localhost:8089/SpringMVC/Availibility/add-disp`, disp );
  }

  getdispById(id: number): Observable<Disponibilite>{
    return this.httpClient.get<Disponibilite>(`${this.baseURL1}/${id}`);
  }

  updatedisp(id: number, disp: Disponibilite): Observable<Object>{
    return this.httpClient.put(`http://localhost:8089/SpringMVC/Availibility//modify-disp`, Disponibilite);
  }

  deletedisp(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8089/SpringMVC/Availibility/remove-disp/${id}`);
  }

}
