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

  constructor(private onboardService: AuthServiceClass, private router: Router) { }

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
      console.log(data);

      this.onboardService.onBoard(data)
        .subscribe((res) => {
          M.toast({ html: 'Boarding you to the land of immortals' });
          // this.router.navigate(['']);
        }, (err) => {
          M.toast({ html: err.message });
        });
    }
  }

}
