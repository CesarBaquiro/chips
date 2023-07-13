import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Chips';
}

function createWhatsAppLink(message: string): string {
  // Reemplaza los caracteres especiales en el mensaje
  const encodedMessage: string = encodeURIComponent(message);

  // Crea el enlace de WhatsApp con el mensaje
  const link: string =
    'https://api.whatsapp.com/send?phone=573005228767&text=' + encodedMessage;

  return link;
}

// Ejemplo de uso

const whatsappLink: string = createWhatsAppLink('Hola como estassssss');
console.log(whatsappLink);
