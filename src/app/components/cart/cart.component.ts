import { Component } from '@angular/core';
import { Products } from 'src/app/models/Products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: Products[] = [];

  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.products.subscribe((products) => {
      this.products = products;
      //console.log(products);
    });
  }

  onClickDelete(i: number) {
    this.cartService.deleteProduct(i);
  }
}
