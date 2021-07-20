import { Component, Input } from '@angular/core';
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
  public isCodigoValido: boolean = false;

  constructor(private formBuilder: FormBuilder, private route: Router) {
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
    console.log(this.formulario.value);
    console.log(this.value);
    this.formulario.reset();
    this.route.navigateByUrl("/cadastro/tipo-conta");
  }
}
