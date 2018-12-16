import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceClass } from '../auth.service';

declare const M;

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {
  firstName = '';
  lastName = '';
  username = '';
  branch = '';
  year = '';
  number = null;
  state = '';

  constructor(private onboardService: AuthServiceClass, private router: Router) {
    if (sessionStorage.getItem('token') == null) {
      this.router.navigate(['auth', 'login']);
    }
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      M.toast({ html: 'Enter valid data in the form' });
    } else {
      const data = {
        token: window.sessionStorage.getItem('token'),
        ...form.value
      };

      this.onboardService.onBoard(data)
        .subscribe((res) => {
          M.toast({ html: res.message });
          if (res.success) {
            if (res.data != null && res.data.token != null) {
              sessionStorage.removeItem('token');
              sessionStorage.setItem('token', res.data.token);
            }
          }
        }, (err) => {
          M.toast({ html: err.message });
        });
    }
  }

}
