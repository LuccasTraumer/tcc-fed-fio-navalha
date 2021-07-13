import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'fdn-cadastro-codigo-confirmacao',
  templateUrl: './cadastro-codigo-confirmacao.component.html',
  styleUrls: ['./cadastro-codigo-confirmacao.component.scss']
})
export class CadastroCodigoConfirmacaoComponent {

  private value: number;
  public formulario;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      codigoConfirmacao: ''
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
    console.log(this.value);
    this.formulario.reset();
  }
}
