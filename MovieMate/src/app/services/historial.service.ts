import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra } from '../interfaces/compra';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private apiUrl = 'http://localhost:3000/api/compras';

  constructor(private http: HttpClient) {}

  getHistorial(correo: string): Observable<Compra[]> {
    const token = localStorage.getItem('token'); // Asegúrate de que el token esté almacenado en el localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Compra[]>(`${this.apiUrl}/${correo}`, { headers });
  }
}
