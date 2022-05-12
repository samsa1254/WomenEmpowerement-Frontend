import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseURL = "http://localhost:8089/SpringMVC/Report/retrieve-all-reps";
  private baseURL1 = "http://localhost:8089/SpringMVC/Report/retrieve-userReports";
  private baseURL2 ='http://localhost:8089/SpringMVC/Event/getEventById';
  private baseURL3 ='http://localhost:8089/SpringMVC/Event/modify-event';

  constructor(private httpClient: HttpClient) { }

  getrepList(): Observable<Report[]>{
    return this.httpClient.get<Report[]>(`${this.baseURL}`);
  }

  getuserrepList(): Observable<Report[]>{
    return this.httpClient.get<Report[]>(`${this.baseURL1}`);
  }

  createrep(rep: Report): Observable<Object>{
    return this.httpClient.post(`http://localhost:8089/SpringMVC/Report/add-rep`, rep );
  }

  getrepById(id: number): Observable<Report>{
    return this.httpClient.get<Report>(`${this.baseURL1}/${id}`);
  }

  updaterep(id: number, rep: Report): Observable<Object>{
    return this.httpClient.put(`http://localhost:8089/SpringMVC/Report/modify-rep`, rep);
  }

  deleterep(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8089/SpringMVC/Report/remove-rep/${id}`);
  }

  treatReportbyblocking(rep : Report , idU:number): Observable<Object>{
    console.log(rep) ;
    console.log(idU);
    console.log(this.httpClient.put(`http://localhost:8089/SpringMVC/Report/treatreport-byblockinguser/${idU}`,rep));
    return this.httpClient.put(`http://localhost:8089/SpringMVC/Report/treatreport-byblockinguser/${idU}`,rep);
  }

  treatReportbyunblocking(rep : Report , idU:number): Observable<Object>{
    console.log(rep) ;
    console.log(idU);
    console.log(this.httpClient.put(`http://localhost:8089/SpringMVC/Report/treatreport-byunblockinguser/${idU}`,rep));
    return this.httpClient.put(`http://localhost:8089/SpringMVC/Report/treatreport-byunblockinguser/${idU}`,rep);
  }

}
