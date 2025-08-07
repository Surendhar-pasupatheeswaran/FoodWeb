import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
private localStorageKey = 'users';
  private loggedIn=false;
  constructor() {}

  // Register a new user
  register(user: { name: string; email:string; password: string }): boolean {
    const users = this.getUsers();
    const userExists = users.some(u => u.name === user.name);

    if (userExists) {
      return false; // Registration failed (username already exists)
    }

    users.push(user);
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
    return true;
  }

  // Login user
  login(user: { name: string; password: string }): any | null {
    const users = this.getUsers();
    const matchedUser = users.find(u => u.name === user.name && u.password === user.password);
    return matchedUser || null;
  }

  // Get all users
  private getUsers(): any[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }

  isLoggedIn():boolean{
    return this.loggedIn;
  }
  
}
