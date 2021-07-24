import { Component, Output, EventEmitter } from '@angular/core';

import { Cliente } from '../../../models/Cliente';

@Component({
  selector: 'fdn-cadastro-nome-senha',
  templateUrl: './cadastro-nome-senha.component.html',
  styleUrls: ['./cadastro-nome-senha.component.scss']
})
export class CadastroNomeSenhaComponent {

  public senhaValida: boolean = false;
  public mensagemErro: string = '';
  private nome: string = '';
  private senha: string = '';
  private senhaConfirmacao: string = '';
  private tipoErro: number = 0;

  @Output() infoLoginCadastrado = new EventEmitter<Cliente>();

  constructor() {}

  validarNome(nome: string) {
    this.nome = nome.trim();
    if(this.nome != '' && this.senha == this.senhaConfirmacao && this.senha != '') {
      this.senhaValida = true;
      return;
    }
    this.senhaValida = false;
  }

  validarSenha(senha: string) {
    this.senha = senha;

    if(senha.length < 8) {
      this.tipoErro = -1;
      this.senhaValida = false;
      this.mensagemErro = 'A senha deve possuir no mínimo 8 caracteres'
      return;
    }

    this.tipoErro = 0;
    this.mensagemErro = '';

    if(senha != this.senhaConfirmacao) {
      this.validarSenhaConfirmacao(this.senhaConfirmacao);
      return;
    }

    this.senhaValida = (this.nome != '')?true:false;
  }

  validarSenhaConfirmacao(senhaConfirmacao: string) {
    this.senhaConfirmacao = senhaConfirmacao;

    if(senhaConfirmacao != this.senha && this.senha != '' && this.tipoErro != -1) {
      this.mensagemErro = 'Senha de confirmação diferente da senha inserida';
      this.tipoErro = -2;
      this.senhaValida = false;
      return;
    }
    this.mensagemErro = '';
    this.tipoErro = 0;

    this.senhaValida = (this.nome != '')?true:false;
  }

  onSubmit(nome: string, senha: string) {
    // Em cada componente que precise de validação, fazer a request e validar o campo necessario mas só enviar os dados para cadastro no ultimo form
    // enquanto a navegação pelos componentes acontece, iremos mandando os dados um para o outro.
    let cliente: Cliente = new Cliente();
    cliente.senha = senha;
    cliente.nome = nome;

    this.infoLoginCadastrado.emit(cliente);
  }

}
