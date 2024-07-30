import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cardNumber: string = '';
  cardHolder: string = 'FULL NAME';
  cardExpiry: string = 'MM / YYYY';
  cardCVC: string = '•••';
  cardColor: string = '#cacaca';
  cardImage: string = '';
  isFlipped: boolean = false;
  metodoPago: string = '';

  get cardNumberMasked() {
    return this.cardNumber.replace(/\d(?=\d{4})/g, '•');
  }

  updateCardNumber(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cardNumber = input.value;
    this.detectCardType();
  }

  updateCardHolder(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cardHolder = input.value || 'FULL NAME';
  }

  updateCardExpiry(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cardExpiry = input.value || 'MM / YYYY';
  }

  updateCardCVC(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cardCVC = input.value || '•••';
  }

  flipCard(isFlipped: boolean) {
    this.isFlipped = isFlipped;
  }

  detectCardType() {
    const cardNumber = this.cardNumber;
    if (cardNumber.startsWith('4')) {
      this.cardColor = '#A1AAE8';
      this.cardImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2000px-Visa_Inc._logo.svg.png';
    } else if (/^5[1-5]/.test(cardNumber)) {
      this.cardColor = '#A4A2A8'; // MasterCard color
      this.cardImage = 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png';
    } else if (/^3[47]/.test(cardNumber)) {
      this.cardColor = '#84A9CF'; // American Express color
      this.cardImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/600px-American_Express_logo.svg.png';
    } else if (/^6/.test(cardNumber)) {
      this.cardColor = '#FFCBB8'; // Discover color
      this.cardImage = 'https://lendedu.com/wp-content/uploads/2016/03/discover-it-for-students-credit-card.jpg';
    } else {
      this.cardColor = '#cacaca'; // Default color
      this.cardImage = '';
    }
  }

  seleccionarMetodo(metodo: string) {
    this.metodoPago = metodo;
    const titulo = document.querySelector('.Psicodelica h1');
    if (titulo) {
      titulo.textContent = `Gracias Por su compra - Pago con ${metodo}`;
    }
  }

  regresar() {
    window.history.back();
  }

  pagar() {
    const notification = document.getElementById('notification');
    if (notification) {
      notification.classList.remove('hidden');
      setTimeout(() => {
        notification.classList.add('hidden');
      }, 6000); // Esconde la notificación después de 3 segundos
    }
  }
}
