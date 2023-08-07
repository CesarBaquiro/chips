import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Products } from '../models/Products';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css'],
})
export class FormOrderComponent implements OnInit {
  cartProducts: Products[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Suscribirse al Observable para recibir los datos de cartProducts
    this.cartService.products.subscribe((products) => {
      this.cartProducts = products;
    });
  }

  mostrarInformacion(event: any): void {
    event.preventDefault(); // Previene el envío del formulario y el recargado de la página

    const formData = new FormData(event.target);
    const customerInfo = {};

    formData.forEach((value, key) => {
      customerInfo[key] = value;
    });

    const customerInfoStr = `${customerInfo['nombreApellido']}
${customerInfo['email']}
${customerInfo['telefono']}
`;
    console.log(customerInfoStr);
    //customerInfoStr += infoCliente + '\n'; // Agregar la información del pedido a pedidoInfo

    // -----------Imprimir lista de pedidos
    let pedidoStr = '';

    this.cartProducts.forEach((product) => {
      let pedido: string = `${product.titulo} - Cantidad: ${
        product.cantidad
      } - $${product.precio * product.cantidad}`;
      pedidoStr += pedido + '\n'; // Agregar la información del pedido a pedidoInfo
    });

    const whatsappLink: string = createWhatsAppLink(
      `*Nuevo pedido - Chips*
---
*Productos*
${pedidoStr}
---
*Datos del comprador*
${customerInfoStr}
---
*Informacion de envio*

Dirección de entrega:
${customerInfo['direccion']},
${customerInfo['ciudad']}

Detalles adicionales:
El envío es por parte de una empresa transportadora nacional, cualquier inconveniente es responsabilidad de la empresa y se hará acompañamiento en su debido proceso.
---


-Acepta terminos y condiciones.-`
    );
    console.log(whatsappLink);
  }
}

//-------------------LINK DE WHATSAPP-------------

function createWhatsAppLink(message: string): string {
  // Reemplaza los caracteres especiales en el mensaje
  const encodedMessage: string = encodeURIComponent(message);

  // Crea el enlace de WhatsApp con el mensaje
  const link: string =
    'https://api.whatsapp.com/send?phone=573005228767&text=' + encodedMessage;

  return link;
}
