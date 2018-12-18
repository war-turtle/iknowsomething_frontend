import { Injectable } from '@angular/core';
import {
  CanLoad,
  CanActivate,
  Route,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import decode from 'jwt-decode';

@Injectable()
export class AuthGuardService implements CanLoad, CanActivate {
  constructor(private router: Router) { }

  canLoad(route: Route): boolean {
    const url: string = route.path;
    console.log('Url:' + url);
    let user: any = false;
    try {
      user = decode(window.sessionStorage.getItem('token'));
    } catch (err) {
      user = false;
    }
    if (window.sessionStorage.getItem('token') ? user : false) {
      if (!user.user.onboard) {
        this.router.navigate(['/auth', 'onboard']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }

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
      if (!user.user.onboard) {
        this.router.navigate(['/auth', 'onboard']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
