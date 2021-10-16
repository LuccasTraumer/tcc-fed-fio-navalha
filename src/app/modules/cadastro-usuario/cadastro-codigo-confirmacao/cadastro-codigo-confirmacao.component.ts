import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'fdn-cadastro-codigo-confirmacao',
  templateUrl: './cadastro-codigo-confirmacao.component.html',
  styleUrls: ['./cadastro-codigo-confirmacao.component.scss']
})
export class CadastroCodigoConfirmacaoComponent {

  public isCodigoValido: boolean = false;
  public formCodigo;
  @Output() codigoConfimacaoCadastrado = new EventEmitter<boolean>();

  constructor() {

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
    this.codigoConfimacaoCadastrado.emit(true);
  }
}
