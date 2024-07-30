import { Injectable } from '@angular/core';
import { Cine } from '../interfaces/boleto';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinesService {

  private serverURL:string = 'https://localhost:7194/api/Cines'  

  constructor(private http:HttpClient) { }

  getCine():Observable<Cine[]>{

    return this.http.get<Cine[]>(`${this.serverURL}/GetCines`).pipe(

      map((res)=>res)
      )
  }


}
