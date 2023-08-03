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

    console.log('Información del formulario:', customerInfo);
    console.log('Informacion del carrito', this.cartProducts);
  }
}
