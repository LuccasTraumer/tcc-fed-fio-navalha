import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'fdn-cadastro-cpf-cnpj',
  templateUrl: './cadastro-cpf-cnpj.component.html',
  styleUrls: ['./cadastro-cpf-cnpj.component.scss']
})
export class CadastroCpfCnpjComponent {

  public textoTipoCadastro: string;
  public formulario;
  public valor: string;
  public isDocumentoValido: boolean = false;
  public tipoErro: number = 0;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formulario = this.formBuilder.group({
      cpf: '',
      cnpj: '',
      value: ''
    });

    let clienteJson = sessionStorage.getItem('cliente');
    let clienteJsonParseado = JSON.parse(clienteJson);

    if(clienteJsonParseado['tipoCliente'] === 'clienteVarejo')
      this.isClienteVarejo();
    else
      this.isBarbearia();
  }

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

  isBarbearia() {
    this.textoTipoCadastro = 'CNPJ';
  }

  isClienteVarejo() {
    this.textoTipoCadastro = 'CPF';
  }

  validaInput(valor: string) {
    if(this.textoTipoCadastro === 'CNPJ' && valor.length == 14) {
      this.isDocumentoValido = this.validarCnpj(valor) ? true : false;
      if(!this.isDocumentoValido) {
        this.tipoErro = -1;
        return;
      }
      this.tipoErro = 0;
      return;
    }
    if(this.textoTipoCadastro === 'CPF' && valor.length == 11) {
      this.isDocumentoValido = this.validarCpf(valor) ? true : false;
      if(!this.isDocumentoValido) {
        this.tipoErro = -1;
        return;
      }
      this.tipoErro = 0;
      return;
    }
    this.tipoErro = 0;
    this.isDocumentoValido = false;
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

validarCnpj(cnpj) {

  cnpj = cnpj.replace(/[^\d]+/g,'');

  if(cnpj == '') return false;

  if (cnpj.length != 14)
      return false;

  // Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" ||
      cnpj == "11111111111111" ||
      cnpj == "22222222222222" ||
      cnpj == "33333333333333" ||
      cnpj == "44444444444444" ||
      cnpj == "55555555555555" ||
      cnpj == "66666666666666" ||
      cnpj == "77777777777777" ||
      cnpj == "88888888888888" ||
      cnpj == "99999999999999")
      return false;

  // Valida DVs
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0,tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0))
      return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0,tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
        return false;

  return true;
}

  onSubmit() {
    let clienteJson = sessionStorage.getItem('cliente');
    let clienteJsonParseado = JSON.parse(clienteJson);

    if (this.textoTipoCadastro === 'CPF') {
      clienteJsonParseado['cpf'] = this.formulario.value['value'];
    } else {
      clienteJsonParseado['cnpj'] = this.formulario.value['cnpj'];
    }

    sessionStorage.setItem('cliente', JSON.stringify(clienteJsonParseado));

    this.router.navigate(['cadastro/endereco']);
  }

}
