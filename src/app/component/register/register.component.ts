import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
  
})
export class RegisterComponent {
  user = {
    name: '',
    email:'',
    password: '',
    confirmPassword:''
  };

  constructor(private router: Router, private userService: UserServiceService) {}

  onRegister() {
    const success = this.userService.register(this.user);
    if (success) {
      alert('Registered successfully!');
      this.router.navigate(['/login']);
    } else {
      alert('User already exists!');
    }
  }}
