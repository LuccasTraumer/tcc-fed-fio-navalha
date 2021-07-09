import { Component, OnInit } from '@angular/core';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';

@Component({
  selector: 'fdn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  pathImage = ConstantesIcons.LOGO_ICON_PNG;

  backgrounds: string[] =
  [
    "../../../assets/images/barber-image-barbeiro1.jpg",
    "../../../assets/images/barber-image-barbeiro2.jpg",
    "../../../assets/images/barber-image-corte1.jpg",
    "../../../assets/images/barber-image-corte2.jpg",
    "../../../assets/images/barber-image-corte3.jpg",
    "../../../assets/images/barber-image-corte4.jpg",
    "../../../assets/images/barber-image-corte5.jpg",
    "../../../assets/images/barber-image-corte6.jpg",
    "../../../assets/images/barber-image-corte7.jpg",
    "../../../assets/images/barber-image-maquina.jpg",
    "../../../assets/images/barber-image-pentes.jpg"
  ];
  background: string = this.backgrounds[10];

  //Tentei fazer com Esse Metodo, mas Nao Funciona
  changeBackground()
  {
    for(let i = 0; i<=10;i++)
    {
      setTimeout(()=> this.background = this.backgrounds[i], 3000)
      console.log(this.background);
      console.log(i);
    }
  }

  constructor() { }

  ngOnInit(): void {}
}
