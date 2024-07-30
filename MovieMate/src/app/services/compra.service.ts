import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  registrarCompra(compra: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.apiUrl}/compras`, compra, { headers });
  }

  /*obtenerHistorial(usuarioId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/historial/${usuarioId}`);
  }*/

  obtenerUltimoBoleto(usuarioId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ultimo-boleto/${usuarioId}`);
  }

  obtenerHistorial(): Observable<any> {
    return this.http.get(`${this.apiUrl}/historial`);
  }
}
