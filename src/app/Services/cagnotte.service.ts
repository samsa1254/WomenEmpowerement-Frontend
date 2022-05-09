import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
 import { cagnotte } from 'src/app/models/cagnotte.model';

@Injectable({
  providedIn: 'root'
})
export class CagnotteService {

  private baseURL = "http://localhost:8089/SpringMVC/Cagnotte/getAllCagnotte";
  private baseURL1 = "http://localhost:8089/SpringMVC/Cagnotte/getCagnotteById";

  constructor(private httpClient: HttpClient) { }

  getCagnottesList(): Observable<cagnotte[]>{
    return this.httpClient.get<cagnotte[]>(`${this.baseURL}`);
  }

  createCagnotte(offer: cagnotte): Observable<Object>{
    return this.httpClient.post(`http://localhost:8089/SpringMVC/Cagnotte/addCagnotte`, offer );
  }
 
  getCagnotteById(id: number): Observable<cagnotte>{
    return this.httpClient.get<cagnotte>(`${this.baseURL1}/${id}`);
  }

  
  deleteCagnotte(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8089/SpringMVC/Cagnotte/deleteCagnotte/${id}`);
  }
}
