import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl = 'http://localhost:3000/api/compras';

  constructor(private http: HttpClient) { }

  // Obtener historial de compras de un usuario
  getCompras(correo: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${correo}`);
  }
}
