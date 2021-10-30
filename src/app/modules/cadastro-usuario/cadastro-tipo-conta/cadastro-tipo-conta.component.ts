import { Component, Output, EventEmitter } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';
import { Barbearia } from '../../../models/barbearia';

@Component({
  selector: 'fdn-cadastro-tipo-conta',
  templateUrl: './cadastro-tipo-conta.component.html',
  styleUrls: ['./cadastro-tipo-conta.component.scss']
})
export class CadastroTipoContaComponent {

  public opcaoSelecionada: number;
  public isTipoContaValido: boolean = false;

  public readonly iconeClienteVarejoCadastro = ConstantesIcons.ICONE_BARBEARIA_CADASTRO_WHITE;
  public readonly iconeBarbeariaCadastro = ConstantesIcons.ICONE_CLIENTE_VAREJO_CADASTRO_WHITE;

  @Output() tipoContaCadastrado = new EventEmitter<string>();

  constructor() {}

  escolherConta(tipoConta: number) {
    this.isTipoContaValido = true;
    this.opcaoSelecionada = tipoConta;
  }

  onSubmit() {
    if(this.opcaoSelecionada == 0) {
      this.tipoContaCadastrado.emit(Cliente.name);
    }
    else {
      this.tipoContaCadastrado.emit(Barbearia.name);
    }
  }
}
