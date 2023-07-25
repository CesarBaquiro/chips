import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent {
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.products
      .pipe(
        map((products) => {
          let total = products.reduce(
            (prev, curr) => prev + curr.precio * curr.cantidad,
            0
          );
          return total;
        })
      )
      .subscribe((val) => {
        this.total = val;
      });
  }
}
