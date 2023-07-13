import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from 'src/app/data/data';
import { Products } from 'src/app/models/Products';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css'],
})
export class ProductCardsComponent implements OnInit {
  list: Products[] = products;

  constructor(private route: ActivatedRoute) {
    this.list = products;
    console.log(this.list);
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
}
