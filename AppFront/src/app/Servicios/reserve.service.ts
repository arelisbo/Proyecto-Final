import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserve } from '../models/reservamodels.js';
import { Token } from '../models/admin.models.js';


@Injectable({
  providedIn: 'root',
})

export class ReservesService {
  
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:4200';
  tokenName = "jwt"

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  register(reserve:Reserve): Observable<Reserve> {
    return this.http.post<Reserve>(this.apiUrl+"/reserve/create", reserve,{ headers: this.headers })
  }

  edit(reserve:Reserve) {
    return this.http.put(this.apiUrl + "/reserve/" + reserve.reserve_id, reserve)
  }

  saveToken(token:Token){
    localStorage.setItem(this.tokenName, token.token)
  }

  // deleteReserve(reserveId:number): Observable<any> {
    
  //   return this.http.delete<any>(this.apiUrl+"/reserve/:deleteId"+reserveId, { headers: this.headers })
  // }

  getReserveList(): Observable<Reserve[]> {
    let headers = this.headers;
    const token:string = localStorage.getItem(this.tokenName) as string
    headers = headers.append("Authorization", "Beader" + token)
  
  return this.http.get<Reserve[]>(this.apiUrl+"/reserve",  { headers })
  }
}
