import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  onLoginPage = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if ( event instanceof NavigationEnd && event.url === '/auth/login') {
        this.onLoginPage = true;
      } else if (event instanceof NavigationEnd && event.url !== '/auth/login') {
        this.onLoginPage = false;
      }
    });
  }

}
