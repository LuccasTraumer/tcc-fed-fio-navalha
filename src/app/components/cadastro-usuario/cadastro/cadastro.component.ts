import { Component } from '@angular/core';
import { Cliente } from '../../../models/Cliente';
import { Router } from '@angular/router';
import { CadastroServiceService } from '../../../services/cadastro-module/cadastro-service.service';
import { Endereco } from '../../../models/Endereco';
import { ClienteBarbearia } from '../../../models/ClienteBarbearia';
import { ClienteVarejo } from '../../../models/ClienteVarejo';

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
  public dataNascimentoCadastrado: boolean = false;
  public cpfCnpjCadastrado: boolean = false;
  public enderecoCadastrado: boolean = false;
  public fotoPerfilCadastrado: boolean = false;

  constructor(private router: Router, private cadastroService: CadastroServiceService) {
    this.cliente = new Cliente();
  }

  getTipoCliente(): string {
    return this.cliente.tipoCliente;
  }

  getCliente(): Cliente {
    return this.cliente;
  }

  setEmail(cpfCnpj: string): void {
    let chaveValor = cpfCnpj.split(':');
    if (chaveValor[0] == 'numero') {
      this.cliente.telefone = chaveValor[1];
    } else
      this.cliente.email = chaveValor[1];
    this.emailCadastrado = true;

    console.log(`Setando email/celular: ${JSON.stringify(this.cliente)}`);
  }

  setCondigoConfirmacao(codigoCadastrado: boolean): void {
    this.codigoConfirmacaoCadastrado = codigoCadastrado;
    console.log(`Setando codigo confirmcao: ${JSON.stringify(this.cliente)}`);
  }

  setTipoConta(tipoConta: string): void {
    let clienteGenerico = this.cliente;
    this.cliente.tipoCliente = tipoConta;
    if (tipoConta == ClienteVarejo.name) {
      this.cliente = new ClienteVarejo();
      this.cliente.tipoCliente = ClienteVarejo.name;
    }
    else {
      this.cliente = new ClienteBarbearia();
      this.cliente.tipoCliente = ClienteBarbearia.name;
    }

    if (clienteGenerico.telefone !== undefined)
      this.cliente.telefone = clienteGenerico.telefone;
    else
      this.cliente.email = clienteGenerico.email;

    this.tipoContaCadastrado = true;

    console.log(`Setando tipoCliente: ${JSON.stringify(this.cliente)}`);
    console.log(`Tipo da class do Objeto: ${this.cliente.constructor.name}`);
  }

  setInfoLogin(cliente: Cliente): void {
    this.cliente.nome = cliente.nome;
    this.cliente.senha = cliente.senha;

    this.infoLoginCadastrado = true;
    console.log(`Setando Info Login: ${JSON.stringify(this.cliente)}`);
  }

  setDataNascimento(date: Date) {
    this.cliente.dataNascimento = date;

    this.dataNascimentoCadastrado = true;
  }

  setCpfCnpj(cpfCnpj: string) {
    if (this.cliente.constructor.name == ClienteVarejo.name)
      this.cliente['cpf'] = cpfCnpj;
    else
      this.cliente['cnpj'] = cpfCnpj;

    this.cpfCnpjCadastrado = true;

    console.log(`Setando cpf/cnpj: ${JSON.stringify(this.cliente)}`);
  }

  setEndereco(endereco: Endereco) {
    this.cliente.endereco = endereco;

    this.enderecoCadastrado = true;
    console.log(endereco);
    console.log(`Setando endereco: ${JSON.stringify(this.cliente)}`);
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
    return true;
    // return this.enderecoCadastrado !== true && this.cpfCnpjCadastrado == true;
  }

  exibirFoto(): boolean {
    return this.fotoPerfilCadastrado !== true && this.enderecoCadastrado == true;
  }

  onSubmit(): void {
    this.cadastroService.cadastrarCliente(this.cliente);

    this.router.navigate(['']);
  }
}
