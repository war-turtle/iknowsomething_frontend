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
    if (window.sessionStorage.getItem('token') ? decode(window.sessionStorage.getItem('token')) : false) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (window.sessionStorage.getItem('token') ? decode(window.sessionStorage.getItem('token')) : false) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
