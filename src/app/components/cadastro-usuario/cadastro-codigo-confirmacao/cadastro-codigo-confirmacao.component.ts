import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'fdn-cadastro-codigo-confirmacao',
  templateUrl: './cadastro-codigo-confirmacao.component.html',
  styleUrls: ['./cadastro-codigo-confirmacao.component.scss']
})
export class CadastroCodigoConfirmacaoComponent {

  public formulario;
  public isCodigoValido: boolean = false;

  constructor(private formBuilder: FormBuilder, private routes: Router) {
    this.formulario = this.formBuilder.group({
      codigoConfirmacao: ''
    });
  }

  validadorCodigo(codigo: string)
  {
    codigo = codigo.trim();

    if(codigo == '' || codigo.length != 8) {
      this.isCodigoValido = false;
      return;
    }
    this.isCodigoValido = true;
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
