import { Component } from '@angular/core';
import { Usuario } from '../../../models/Usuario';
import { Endereco } from '../../../models/endereco';
import { Barbearia } from '../../../models/barbearia';
import { Cliente } from '../../../models/cliente';
import { CadastroServiceService } from '../services/cadastro-service.service';

@Component({
  selector: 'fdn-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  private cliente: Usuario;

  public emailCadastrado: boolean = false;
  public codigoConfirmacaoCadastrado: boolean = false;
  public tipoContaCadastrado: boolean = false;
  public infoLoginCadastrado: boolean = false;
  public dataNascimentoCadastrado: boolean = false;
  public cpfCnpjCadastrado: boolean = false;
  public enderecoCadastrado: boolean = false;
  public fotoPerfilCadastrado: boolean = false;

  constructor() {
    this.cliente = new Usuario();
  }

  getTipoCliente(): string {
    return this.cliente.tipoCliente;
  }

  getCliente(): Usuario {
    return this.cliente;
  }

  setNumeroEmail(cpfCnpj: string): void {
    console.log(cpfCnpj)
    let chaveValor = cpfCnpj.split(':');
    if (chaveValor[0] == 'numero') {
      this.cliente.telefone = chaveValor[1];
    } else
      this.cliente.email = chaveValor[1];

    setInterval(() => {
      this.emailCadastrado = true;
    }, 3000);
  }

  setCondigoConfirmacao(codigoCadastrado: boolean): void {
    this.codigoConfirmacaoCadastrado = codigoCadastrado;
  }

  setTipoConta(tipoConta: string): void {
    let clienteGenerico = this.cliente;
    this.cliente.tipoCliente = tipoConta;
    if (tipoConta == Cliente.name) {
      this.cliente = new Cliente();
      this.cliente.tipoCliente = Cliente.name;
    }
    else {
      this.cliente = new Barbearia();
      this.cliente.tipoCliente = Barbearia.name;
    }

    if (clienteGenerico.telefone !== undefined)
      this.cliente.telefone = clienteGenerico.telefone;
    else
      this.cliente.email = clienteGenerico.email;

    this.tipoContaCadastrado = true;
  }

  setInfoLogin(cliente: Usuario): void {
    this.cliente.nome = cliente.nome;
    this.cliente.senha = cliente.senha;

    this.infoLoginCadastrado = true;
  }

  setDataNascimento(date: Date) {
    this.cliente.dataNascimento = date;

    this.dataNascimentoCadastrado = true;
  }

  setCpfCnpj(cpfCnpj: string) {
    if (this.cliente.constructor.name == Cliente.name)
      this.cliente['cpf'] = cpfCnpj;
    else
      this.cliente['cnpj'] = cpfCnpj;

    this.cpfCnpjCadastrado = true;
  }

  setEndereco(endereco: Endereco) {
    this.cliente.endereco = endereco;
    this.enderecoCadastrado = true;
  }

  exibirCadastroEmailCelular(): boolean {
    return this.emailCadastrado !== true;
  }

  exibirCodigoConfirmacao(): boolean {
    return this.codigoConfirmacaoCadastrado !== true && this.emailCadastrado == true;
  }

  exibirTipoConta(): boolean {
    return this.tipoContaCadastrado !== true && this.codigoConfirmacaoCadastrado == true;
  }

  exibirCadastroNome(): boolean {
    return this.infoLoginCadastrado !== true && this.tipoContaCadastrado == true;
  }

  exibirDataNascimento(): boolean {
    return this.dataNascimentoCadastrado !== true && this.infoLoginCadastrado == true;
  }

  exibirCpfCnpj(): boolean {
    return this.cpfCnpjCadastrado !== true && this.dataNascimentoCadastrado == true;
  }

  exibirEndereco(): boolean {
    return this.enderecoCadastrado !== true && this.cpfCnpjCadastrado == true;
  }

  exibirFoto(): boolean {
    return this.fotoPerfilCadastrado !== true && this.enderecoCadastrado == true;
  }
}
