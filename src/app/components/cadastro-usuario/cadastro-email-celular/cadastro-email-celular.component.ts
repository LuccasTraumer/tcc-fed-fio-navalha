import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fdn-cadastro-email-celular',
  templateUrl: './cadastro-email-celular.component.html',
  styleUrls: ['./cadastro-email-celular.component.scss']
})
export class CadastroEmailCelularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public switchType: string;

  public textoInterno: string = "Insira seu Telefone";
  public inputType: string = " ";

  public opcao: number = 0;

  ChosePhone()
  {
    this.switchType = 'number'
    this.opcao = 0;
    this.textoInterno = "Insira seu Telefone"
    console.log(this.opcao);
  }

  ChoseEmail()
  {
    this.switchType = 'email'
    this.opcao = 1;
    this.textoInterno = "Insira seu E-mail"
    console.log(this.opcao);
  }

  EnviarCodigo()
  {
    this.inputType = document.getElementById("input-type").nodeValue;
    if(this.opcao == 0)
      alert("Código enviado para seu número");
    else
      alert("Código enviado para seu email")
  }



/*
 * Masking input with 'VanillaMasker'
 */
//input = document.querySelector("input");

// Applying brazilian mask
//VMasker(input).maskPattern(any:"(99) 99999-9999");
//VMasker().maskPattern("(99) 9999-9999");


}
