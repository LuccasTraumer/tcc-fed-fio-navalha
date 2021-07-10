import { Component, OnInit } from '@angular/core';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';

@Component({
  selector: 'fdn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  pathImage = ConstantesIcons.LOGO_ICON_PNG;


  background: string = "../../../assets/images/barber-image-pentes.jpg";

  constructor() { }

  ngOnInit(): void {}
}
