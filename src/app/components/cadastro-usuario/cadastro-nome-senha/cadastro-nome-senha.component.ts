import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'fdn-cadastro-nome-senha',
  templateUrl: './cadastro-nome-senha.component.html',
  styleUrls: ['./cadastro-nome-senha.component.scss']
})
export class CadastroNomeSenhaComponent {

  public formulario;

  constructor(private formBuilder: FormBuilder, private routes: Router) {
    this.formulario = this.formBuilder.group({
      nome: '',
      senha: ''
    });

  }

  onSubmit() {
    // Em cada componente que precise de validação, fazer a request e validar o campo necessario mas só enviar os dados para cadastro no ultimo form
    // enquanto a navegação pelos componentes acontece, iremos mandando os dados um para o outro.

    let clienteJson = sessionStorage.getItem('cliente');
    let clieteJsonParseado = JSON.parse(clienteJson);

    if(clieteJsonParseado === undefined)
      this.routes.navigate(['cadastro']);

    clieteJsonParseado['nome'] = this.formulario.value['nome'];
    clieteJsonParseado['senha'] = this.formulario.value['senha'];
    console.log(clienteJson);

    sessionStorage.setItem('cliente', JSON.stringify(clieteJsonParseado));

    // this.routes.navigate(['cadastro/data-nascimento']);
  }

}
