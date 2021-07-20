import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../../../models/Cliente';

@Component({
  selector: 'fdn-cadastro-nome-senha',
  templateUrl: './cadastro-nome-senha.component.html',
  styleUrls: ['./cadastro-nome-senha.component.scss']
})
export class CadastroNomeSenhaComponent {

  public formulario;

  @Output() infoLoginCadastrado = new EventEmitter<Cliente>();

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nome: '',
      senha: ''
    });
  }

  public onSubmit(): void {
    // Em cada componente que precise de validação, fazer a request e validar o campo necessario mas só enviar os dados para cadastro no ultimo form
    // enquanto a navegação pelos componentes acontece, iremos mandando os dados um para o outro.
    let cliente: Cliente = new Cliente();
    cliente.nome = this.formulario.value['nome'];
    cliente.senha = this.formulario.value['senha'];

    this.infoLoginCadastrado.emit(cliente);
  }

}
