import { Component } from '@angular/core';
import { Cliente } from '../../../models/Cliente';

@Component({
  selector: 'fdn-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  private cliente: Cliente;

  public emailCadastrado: boolean = false;
  public codigoConfirmacaoCadastrado: boolean = false;
  public tipoContaCadastrado: boolean = false;
  public infoLoginCadastrado: boolean = false;

  constructor() {
    this.cliente = new Cliente();
  }

  setEmail(cliente: Cliente): void {
    console.log(cliente.telefone);
    this.emailCadastrado = true;
    if (cliente.email !== undefined)
      this.cliente.email = cliente.email;
    else
      this.cliente.telefone = cliente.telefone;
  }

  setCondigoConfirmacao(codigoCadastrado: boolean): void {
    this.codigoConfirmacaoCadastrado = codigoCadastrado;
  }

  setTipoConta(tipoConta: string): void {
    this.cliente.tipoCliente = tipoConta;
    this.tipoContaCadastrado = true;
    console.log(this.cliente);
  }

  setInfoLogin(cliente: Cliente): void {
    this.cliente.nome = cliente.nome;
    this.cliente.senha = cliente.senha;
    console.log(cliente);
  }
}
