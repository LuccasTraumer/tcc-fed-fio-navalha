import { Component } from '@angular/core';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';
import { Router } from '@angular/router';

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

  constructor(private routes: Router) { }

  onSubmit() {
    let clienteJson = sessionStorage.getItem('cliente');
    let clienteJsonParseado = JSON.parse(clienteJson);

    if(this.opcaoSelecionada == 0)
    clienteJsonParseado['tipoCliente'] = 'clienteVarejo';
    else
    clienteJsonParseado['tipoCliente'] = 'clienteBarbearia';

    sessionStorage.setItem('cliente', JSON.stringify(clienteJsonParseado));
    this.routes.navigate(['cadastro/info-login']);
  }
}
