import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fdn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  pathImage = '';

  constructor() { }

  ngOnInit(): void {
  }
}
