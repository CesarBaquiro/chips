import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../models/Products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts: Products[] = [];

  private _products: BehaviorSubject<Products[]>;

  constructor() {
    this._products = new BehaviorSubject<Products[]>([]);
  }

  get products() {
    return this._products.asObservable();
  }

  addNewProduct(product: Products) {
    let productoExistente = this.cartProducts.find(
      (objeto) => objeto === product
    );
    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      product.cantidad = 1;
      this.cartProducts.push(product);
    }
    this._products.next(this.cartProducts);
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this._products.next(this.cartProducts);
  }

  // -------------------------------
}
