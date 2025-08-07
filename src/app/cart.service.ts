import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart: Product[] = [];

  
  addProduct(product: Product) {
    this.cart.push(product);
    console.log('Product added to cart:', product);
  }

  getCartItems(): Product[] {
    return this.cart;
  }

}
