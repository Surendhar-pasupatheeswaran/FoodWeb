import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
  export class ProfileComponent implements OnInit {
  user: any = null;
  showCard: boolean = false;

  ngOnInit() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.user = JSON.parse(loggedInUser);
      this.showCard = true;

      // Hide the card after 10 seconds
      setTimeout(() => {
        this.showCard = false;
      }, 10000);
    }
  }
  

}
