import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import decode from 'jwt-decode';

@Injectable()
export class OnBoardGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let user: any = false;
    try {
      user = decode(window.sessionStorage.getItem('token'));
    } catch (err) {
      user = false;
    }
    if (window.sessionStorage.getItem('token') ? user : false) {
      if (user.user.onboard) {
        this.router.navigate(['/app', 'blogs']);
        return false;
      } else {
        return true;
      }
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
