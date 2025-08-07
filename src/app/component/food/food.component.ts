import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SafePipe } from '../../safe.pipe';
import { CartService } from '../../cart.service';
import { Product } from '../../product';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-food',
  imports: [CommonModule],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
   foodVideos = [
    'video/food_preparation.mp4',
    'video/meat.mp4 ',
    'video/fishFry.mp4'
  ];

  
products = [
    { name: 'Pizza', price: 150, image: 'pizza.jpg' },
    { name: 'Burger', price: 80, image: 'burger.jpg' },
    { name: 'Pasta', price: 120, image: 'pasta.png' },
    { name: 'Fried Rice', price: 100, image: 'friedrice.jpg' },
    { name: 'Samosa', price: 20, image: 'samosa.jpg' },
    { name: 'Dosa', price: 50, image: 'dosa.jpg' },
    { name: 'Idli', price: 40, image: 'idly.jpg' },
    { name: 'Noodles', price: 90, image: 'noodles.jpg' },
    { name: 'Sandwich', price: 70, image: 'sandwich.jpg' },
    { name: 'French Fries', price: 60, image: 'fries.jpg' },
    { name: 'Biryani', price: 160, image: 'briyani.jpg' },
    { name: 'Chapati', price: 30, image: 'chappati.jpg' },
    { name: 'Parotta', price: 40, image: 'parotta.jpg' },
    { name: 'Kurma', price: 55, image: 'veg-kurma.jpg' },
    { name: 'Paneer Curry', price: 110, image: 'panner.jpg' },
    { name: 'Momos', price: 60, image: 'momos.jpg' },
    { name: 'Cutlet', price: 25, image: 'cutlet.jpg' },
    { name: 'Kichdi', price: 45, image: 'kichidi.jpg' },
    { name: 'Vada', price: 35, image: 'vada.jpg' },
    { name: 'Upma', price: 40, image: 'upma.jpg' }
  ];
  constructor(private cartService:CartService) {}
  addToCart(item: any) {
  const product: Product = {
    id: Date.now(), // generate temporary unique ID
    name: item.name,
    price: item.price,
    image: item.image
  };
    alert("Cart added successfull")

  this.cartService.addProduct(product);
}



  ngOnInit(): void {}
}
