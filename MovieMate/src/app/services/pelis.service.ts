import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pelicula } from '../interfaces/boleto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PelisService {

  
  private serverURL:string = 'https://localhost:7194/api/Cines'  

  constructor(private http:HttpClient) { }

  getPelis():Observable<Pelicula[]>{

    return this.http.get<Pelicula[]>(`${this.serverURL}/GetPeliculas`).pipe(

      map((res)=>res)
      )
  }
  



}
