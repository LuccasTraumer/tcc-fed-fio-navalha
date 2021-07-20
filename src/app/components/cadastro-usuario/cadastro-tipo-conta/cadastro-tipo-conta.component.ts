import { Component, Output, EventEmitter } from '@angular/core';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';
import { FormBuilder } from '@angular/forms';


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

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      tipoCliente: ''
    })
  }

  onSubmit() {
    console.log(this.opcaoSelecionada)
    if(this.opcaoSelecionada == 0) {
      this.tipoContaCadastrado.emit('clienteVarejo');
    }
    else {
      this.tipoContaCadastrado.emit('clienteBarbearia');
    }
  }
}
