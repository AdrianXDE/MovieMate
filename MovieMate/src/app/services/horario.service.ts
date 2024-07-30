import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Horario } from '../interfaces/boleto';


@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private serverURL:string = 'https://localhost:7194/api/Cines'


  constructor(private http:HttpClient) { }

        getHorario():Observable<Horario[]>{

            return this.http.get<Horario[]>(`${this.serverURL}/GetHorarios`).pipe(

              map((res)=>res)
              )
          }

  }

 

