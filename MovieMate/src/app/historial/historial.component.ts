import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compra } from '../interfaces/compra';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  historial: Compra[] = [];
  correo: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  obtenerHistorial() {
    if (this.correo) {
      this.http.get<Compra[]>(`/api/compras/${this.correo}`)
        .subscribe(data => {
          this.historial = data;
        }, error => {
          console.error('Error retrieving purchase history', error);
        });
    } else {
      console.error('Correo no ingresado');
    }
  }
}
