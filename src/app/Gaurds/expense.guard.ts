import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ExpenseGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree {
    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    const isLoggedIn = isUserLoggedIn != null && isUserLoggedIn == 'true';

    if (isLoggedIn) {
      if (url === '/login') {
        return this.router.parseUrl('/expenses');
      } else {
        return true;
      }
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
