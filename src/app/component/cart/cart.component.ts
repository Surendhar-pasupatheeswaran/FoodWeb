import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: Product[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  proceedToPayment() {
    alert('Redirecting to payment...');
    // You can implement routing to a payment page here
  }

   showPayment = false;
  paymentMethod: string = 'debit';

  makePayment() {
    // You can add form validation or service call here
    alert(`Payment initiated using ${this.paymentMethod.toUpperCase()}`);

    this.showPayment = false; // hide card after payment
  }


  showPaymentOptions = false;
  selectedPaymentMethod = 'debit'; // default
  paymentSuccess = false;

  processPayment() {
    this.paymentSuccess = false;
    this.showPaymentOptions = false;
    alert(`Payment initiated using ${this.paymentMethod.toUpperCase()}`);
    // Simulate 10-second payment delay
    setTimeout(() => {
      this.paymentSuccess = true;
    }, 10000);


    alert("Payment Success");
  }
}
