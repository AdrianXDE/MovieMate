import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Boleto } from '../interfaces/boleto';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {
  private serverURL: string = 'https://localhost:7194/api/Boletos';

  constructor(private http: HttpClient) {}

  getBoletos(): Observable<Boleto[]> {
    return this.http.get<Boleto[]>(this.serverURL);
  }

  postBoleto(boleto: Boleto): Observable<Boleto> {
    return this.http.post<Boleto>(this.serverURL, boleto).pipe(
      map((res) => res)
    );
  }
}
