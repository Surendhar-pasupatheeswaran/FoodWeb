import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce';
  isLoggedin = false;

  constructor(private router: Router) {
    this.isLoggedin = !!localStorage.getItem('token'); // Or your auth logic
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedin = false;
    this.router.navigate(['/login']);
  }
}
