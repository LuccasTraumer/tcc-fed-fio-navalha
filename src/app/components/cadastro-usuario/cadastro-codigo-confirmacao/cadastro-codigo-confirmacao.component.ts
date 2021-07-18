import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'fdn-cadastro-codigo-confirmacao',
  templateUrl: './cadastro-codigo-confirmacao.component.html',
  styleUrls: ['./cadastro-codigo-confirmacao.component.scss']
})
export class CadastroCodigoConfirmacaoComponent {

  private value: number;
  public formulario;

  constructor(private formBuilder: FormBuilder, private routes: Router) {
    this.formulario = this.formBuilder.group({
      codigoConfirmacao: ''
    });
  }

  onSubmit() {
    let clienteJSON = sessionStorage.getItem('cliente');
    let jsonParseado = JSON.parse(clienteJSON);
    if(jsonParseado.telefone !== undefined || jsonParseado.email !== undefined)
      this.routes.navigate(['cadastro/tipo-conta']);
    else
      this.routes.navigate(['cadastro']);
  }
}
