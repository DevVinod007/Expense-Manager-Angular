import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Expense Manager';
  isUserLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    let storeData = localStorage.getItem('isUserLoggedIn');

    if (storeData != null && storeData == 'true') this.isUserLoggedIn = true;
    else {
      this.isUserLoggedIn = false;
    }
  }
}
