 import { Candidacy } from 'src/app/models/candidacy';
 import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { HttpParams } from '@angular/common/http';
 import { Observable } from 'rxjs';
 import {Offer} from "../models/offer.model";

@Injectable({
  providedIn: 'root'
})
export class CandidacyServicesService {

constructor(private httpClient: HttpClient) { }

getCandidList(){
    return this.httpClient.get<Candidacy[]>('http://localhost:8089/SpringMVC/Candidacy/GetAllCandid');
  }

getCandidByOfferList(){
    return this.httpClient.get<Candidacy[]>('http://localhost:8089/SpringMVC/Candidacy/GetCandidbyOffer/30');
  }

    ApproveCandid(id: number , s: number): Observable<Object>{
    return this.httpClient.put('http://localhost:8089/SpringMVC/Candidacy/ApproveCandid/'+id+'/'+s,this.httpOptions);
  }

  getCandById(id: number): Observable<Candidacy>{
    return this.httpClient.get<Candidacy>(`http://localhost:8089/SpringMVC/Candidacy/GetCandid/${id}`);
  }

   PostOff2(id: number,id2:number): Observable<any>{
     return this.httpClient.post('http://localhost:8089/SpringMVC/Candidacy/Affect/' + id + '/' + id2, this.httpOptions);
   }



     CandByU(id: number){
        return this.httpClient.get<Candidacy[]>(`http://localhost:8089/SpringMVC/Candidacy/GetCandidbyuser`);
      }

    CandByOff(id: number){
        return this.httpClient.get<Candidacy[]>(`http://localhost:8089/SpringMVC/Candidacy/GetCandidbyOffer/${id}`);
      }


  updateCand(can: Candidacy): Observable<Object>{
    return this.httpClient.put(`http://localhost:8089/SpringMVC/Candidacy/UpdateCandid`,can);
  }

  deleteCand(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8089/SpringMVC/Candidacy/DeleteCandid/${id}`);
  }
  httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  }),
  }
}
