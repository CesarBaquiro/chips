import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from 'src/app/data/data';
import { Products } from 'src/app/models/Products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css'],
})
export class ProductCardsComponent implements OnInit {
  productsData: Products[] = products;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.productsData = products;
    // console.log('Lista de todos los productos', this.productsData);
  }

  ngOnInit(): void {}

  isRoute(route: string): boolean {
    return this.route.snapshot.routeConfig?.path === route;
  }

  shuffle(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  onClick(product: Products) {
    this.cartService.addNewProduct(product);
  }
}
