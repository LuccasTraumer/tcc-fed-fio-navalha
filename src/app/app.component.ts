import { Component } from '@angular/core';
import { Cliente } from './models/Cliente';
import { ClienteVarejo } from './models/ClienteVarejo';
import { AutenticacaoService } from './components/cadastro-usuario/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tcc-fed-fio-navalha';

  cliente: Cliente;

  public exibirMenu: boolean = true;

  constructor(private autenticacaoService: AutenticacaoService) {
    this.cliente = new ClienteVarejo();
    this.cliente.fotoPerfil = '../assets/icons/barbearia_icone_exemplo.jpg'

    this.autenticacaoService.clienteAutenticado.subscribe(exibicao => this.exibirMenu = exibicao)
  }
}
