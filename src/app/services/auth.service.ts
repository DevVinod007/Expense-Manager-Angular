import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserLoggedIn = false;

  constructor() {}

  login(userName: string, password: string): Observable<boolean> {
    this.isUserLoggedIn = userName === 'admin' && password === 'admin';
    localStorage.setItem(
      'isUserLoggedIn',
      this.isUserLoggedIn ? 'true' : 'false'
    );

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap((isAuthenticated: boolean) => {
        console.log(
          `User authentication is ${isAuthenticated ? 'successful' : 'failed'}.`
        );
      })
    );
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }

  isLoggedIn(): boolean {
    const loggedIn = localStorage.getItem('isUserLoggedIn');
    return loggedIn ? loggedIn === 'true' : false;
  }
}
