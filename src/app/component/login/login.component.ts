import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../../service/user-service.service';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-login',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    name: '',
    password: ''
  };

  constructor(private router: Router, private userService: UserServiceService, private appComponent: AppComponent) {}

  onLogin() {
    const isLoggedIn = this.userService.login({ name: this.user.name, password: this.user.password });
    this.appComponent.isLoggedin=isLoggedIn;
    if (isLoggedIn) {
      alert('Login successful!');
      this.router.navigate(['/food']);
    } else {
      if(isLoggedIn==false){
        this.router.navigate  (['/login']);
      }
      alert('Invalid username or password!');
    }
  }

  register() {
    this.router.navigateByUrl('/register');
  }}
