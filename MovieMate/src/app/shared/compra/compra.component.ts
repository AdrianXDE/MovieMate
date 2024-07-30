import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CompraService } from '../../services/compra.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {
  ticket = {
    cine: '',
    pelicula: '',
    hora: '',
    numeroBoletos: 1,
    precio: 0,
    nombreCliente: '',
    fecha: '',
    correo: '' // Añadir el campo de correo
  };

  constructor(private location: Location, private compraService: CompraService, private router: Router) {}

  onSubmit() {
    this.ticket.precio = this.calcularPrecioTotal();
    console.log('Compra realizada', this.ticket);

    // Enviar los datos al backend
    this.compraService.registrarCompra(this.ticket).subscribe(
      response => {
        console.log('Ticket guardado exitosamente', response);
        // Redirigir al usuario al home después de la compra
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Error al guardar el ticket', error);
      }
    );
  }

  calcularPrecioTotal(): number {
    const precioPorBoleto = 65;
    return this.ticket.numeroBoletos * precioPorBoleto;
  }

  goBack() {
    this.location.back();
  }
}
