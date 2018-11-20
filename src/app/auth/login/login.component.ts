import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

declare const M;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(
    private socialAuthService: AuthService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        if (userData.email.split('@')[1] === 'nitkkr.ac.in') {
          this.loginService.login(userData.idToken)
            .subscribe((res) => {
              M.toast({ html: 'Logging you in' });
              this.router.navigate(['/app/profile']);
            },
              (err) => {
                M.toast({ html: err.message });
              });
        } else {
          M.toast({ html: 'Please Login With NIT KKR Domain' });
        }
      }
    );
  }

}
