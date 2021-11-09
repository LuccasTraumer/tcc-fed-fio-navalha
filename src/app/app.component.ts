import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {Usuario} from "./models/Usuario";
import {AutenticacaoService} from "./modules/cadastro-usuario/services/autenticacao.service";
import {Cliente} from "./models/Cliente";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tcc-fed-fio-navalha';

  cliente: Usuario;

  public exibirMenu: boolean = true;//MENU

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) {
    this.cliente = new Cliente();
    this.cliente.fotoPerfil = '../assets/icons/barbearia_icone_exemplo.jpg'

    this.autenticacaoService.clienteAutenticado.subscribe((exibicao : any) => this.exibirMenu = exibicao)
    console.log(`${environment.srvTCC}/cadastro/cliente`);
  }

  public buscarBarbearia() {
    console.log('Cheguei')
    //TODO: Remover Comentario e Verificar se o router funciona
    //window.location.href = '#/search';
    this.router.navigate(['#/search']);
  }
}
