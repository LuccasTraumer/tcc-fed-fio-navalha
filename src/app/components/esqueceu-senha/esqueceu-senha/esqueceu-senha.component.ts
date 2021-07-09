/* eslint-disable import/prefer-default-export */
import { Component } from '@angular/core';

@Component({
  selector: 'fdn-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.scss'],
})
export class EsqueceuSenhaComponent {

  public switchType: string;

  public textoInterno: string = "Insira seu Telefone";

  public opcao: number = 0;

  ChosePhone()
  {
    this.switchType = 'TELEFONE'
    this.opcao = 0;
    this.textoInterno = "Insira seu Telefone"
    console.log(this.opcao);
  }

  ChoseEmail()
  {
    this.switchType = 'E-MAIL'
    this.opcao = 1;
    this.textoInterno = "Insira seu E-mail"
    console.log(this.opcao);
  }

  Alertar()
  {
    if(this.opcao == 0)
      alert("Código enviado para seu número");
    else
      alert("Código enviado para seu email")
  }

}
