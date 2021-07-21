import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'fdn-cadastro-nome-senha',
  templateUrl: './cadastro-nome-senha.component.html',
  styleUrls: ['./cadastro-nome-senha.component.scss']
})
export class CadastroNomeSenhaComponent {

  public formulario;
  public senhaValida: boolean = false;
  public mensagemErro: string = '';
  private httpOptions;
  private nome: string = '';
  private senha: string = '';
  private senhaConfirmacao: string = '';
  private tipoErro: number = 0;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {

    this.formulario = this.formBuilder.group({
      nome: '',
      senha: ''
    });
  }

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

  onSubmit() {
    console.log(this.formulario.value);
    // Em cada componente que precise de validação, fazer a request e validar o campo necessario mas só enviar os dados para cadastro no ultimo form
    // enquanto a navegação pelos componentes acontece, iremos mandando os dados um para o outro.

    let clienteJson = sessionStorage.getItem('cliente');
    let clieteJsonParseado = JSON.parse(clienteJson);

    if(clieteJsonParseado === undefined)
      this.router.navigate(['cadastro']);

    clieteJsonParseado['nome'] = this.formulario.value['nome'];
    clieteJsonParseado['senha'] = this.formulario.value['senha'];
    console.log(clienteJson);

    sessionStorage.setItem('cliente', JSON.stringify(clieteJsonParseado));

    console.log(clieteJsonParseado)
    this.router.navigate(['cadastro/data-nascimento']);
  }

}
