import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'fdn-cadastro-codigo-confirmacao',
  templateUrl: './cadastro-codigo-confirmacao.component.html',
  styleUrls: ['./cadastro-codigo-confirmacao.component.scss']
})
export class CadastroCodigoConfirmacaoComponent {

  public formulario;

  @Output() codigoConfimacaoCadastrado = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      codigoConfirmacao: ''
    });
  }

  onSubmit() {
    let clienteJSON = sessionStorage.getItem('cliente');
    let jsonParseado = JSON.parse(clienteJSON);
    this.codigoConfimacaoCadastrado.emit(true);
  }
}
