import { Component, Output, EventEmitter } from '@angular/core';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';


@Component({
  selector: 'fdn-cadastro-tipo-conta',
  templateUrl: './cadastro-tipo-conta.component.html',
  styleUrls: ['./cadastro-tipo-conta.component.scss']
})
export class CadastroTipoContaComponent {

  public opcaoSelecionada: number;
  public formulario;

  public readonly iconeClienteVarejoCadastro = ConstantesIcons.ICONE_BARBEARIA_CADASTRO_WHITE;
  public readonly iconeBarbeariaCadastro = ConstantesIcons.ICONE_CLIENTE_VAREJO_CADASTRO_WHITE;

  @Output() tipoContaCadastrado = new EventEmitter<string>();

  constructor() { }

  onSubmit() {
    if(this.opcaoSelecionada == 0) {
      this.tipoContaCadastrado.emit('clienteVarejo');
    }
    else {
      this.tipoContaCadastrado.emit('clienteBarbearia');
    }
  }
}
