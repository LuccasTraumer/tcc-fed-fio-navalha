import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Inputmask from "inputmask"

@Component({
  selector: 'fdn-cadastro-cpf',
  templateUrl: './cadastro-cpf.component.html',
  styleUrls: ['./cadastro-cpf.component.scss']
})
export class CadastroCpfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Inputmask().mask(document.querySelectorAll("input"));
  }
  ponto: boolean = false;

  validaNumero(input: string){
    let numbers: string = '0123456789';
    let valor = input.split('');
    let container = document.getElementById('cpf') as HTMLInputElement;

    for(let i = 0; i< valor.length; i++) {
      if(!numbers.includes(valor[i])){
        let valor = container.value;
        container.value = valor.substring(0, valor.length-1);
        return false;
      }
    }
    return true;
  }

  validaInput(valor: string){
    let container = document.getElementById('cpf') as HTMLInputElement;
console.log( valor)
    let isNumero = this.validaNumero(valor);



   let resultado = this.validarCpf(valor);
    console.log(resultado);
  }

  validarCpf(cpf: string){
      var Soma;
      var Resto;
      Soma = 0;
    if (cpf == "00000000000")
      return false;

    for (let i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(cpf.substring(9, 10)) ) return false;

    Soma = 0;
      for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
      return true;
  }

}
