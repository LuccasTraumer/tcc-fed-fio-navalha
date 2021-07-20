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

  isBarbearia() {
    this.textoTipoCadastro = 'CNPJ';
  }

  isClienteVarejo() {
    this.textoTipoCadastro = 'CPF';
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
