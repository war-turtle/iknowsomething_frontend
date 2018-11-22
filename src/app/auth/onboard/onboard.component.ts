import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceClass } from '../auth.service';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {

  constructor(private AuthService: AuthServiceClass) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    console.log(form);
    // this.AuthService.onBoard()
  }

}
