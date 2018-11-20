import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      console.log($('select'));
      $('select').formSelect();
    });
  }

}
