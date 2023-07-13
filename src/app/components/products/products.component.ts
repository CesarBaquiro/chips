import { Component } from '@angular/core';
import { products } from 'src/app/data/data';
import { Products } from 'src/app/models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  list: Products[] = products;
  constructor() {
    this.list = products;
    //console.log(this.list);
  }
}
