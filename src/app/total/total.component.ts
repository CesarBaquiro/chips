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
          return products.reduce((prev, curr) => prev + curr.precio, 0);
        })
      )
      .subscribe((val) => {
        this.total = val;
      });
  }
}
