import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fdn-cadastro-codigo-confirmacao',
  templateUrl: './cadastro-codigo-confirmacao.component.html',
  styleUrls: ['./cadastro-codigo-confirmacao.component.scss']
})
export class CadastroCodigoConfirmacaoComponent {

  public isCodigoValido: boolean = false;

  @Output() codigoConfimacaoCadastrado = new EventEmitter<boolean>();

  constructor() {}

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
