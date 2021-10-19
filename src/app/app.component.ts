import { Component } from '@angular/core';
import { Usuario } from './models/Usuario';
import { Cliente } from './models/cliente';
import { AutenticacaoService } from './modules/cadastro-usuario/services/autenticacao.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tcc-fed-fio-navalha';

  cliente: Usuario;

  public exibirMenu: boolean = true;//MENU

  constructor(private autenticacaoService: AutenticacaoService) {
    this.cliente = new Cliente();
    this.cliente.fotoPerfil = '../assets/icons/barbearia_icone_exemplo.jpg'

    this.autenticacaoService.clienteAutenticado.subscribe((exibicao : any) => this.exibirMenu = exibicao)
    console.log(`${environment.srvTCC}/cadastro/cliente`);
  }
}
