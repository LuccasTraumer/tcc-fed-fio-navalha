import {Component, OnDestroy} from '@angular/core';
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
export class AppComponent implements OnDestroy{
  title = 'tcc-fed-fio-navalha';

  cliente: Usuario;

  public exibirMenu: boolean = true;
  protected usuarioAutenticado: boolean;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) {
    this.cliente = new Cliente();
    this.cliente.fotoPerfil = '../assets/icons/barbearia_icone_exemplo.jpg'

    this.autenticacaoService.clienteAutenticado
      .subscribe((exibicao : any) => {
        this.exibirMenu = exibicao;
        this.usuarioAutenticado = this.autenticacaoService.usuarioEstaAutenticado();
      });

    console.log(`${environment.srvTCC}/cadastro/cliente`);
  }

  public buscarBarbearia() {
    //TODO: Remover Comentario e Verificar se o router funciona
    this.router.navigate(['/search']);
  }

  public irParaHome() {
    if(this.autenticacaoService.usuarioEstaAutenticado() && this.cliente.tipoCliente === 'cliente')
      this.router.navigate(['home-cliente']);
    else if (this.autenticacaoService.usuarioEstaAutenticado() && this.cliente.tipoCliente === 'barbearia')
      this.router.navigate(['home-barbearia']);
    else
      this.router.navigate(['']);
  }

  public irParaMaps() {
    if (this.usuarioAutenticado)
      this.router.navigate(['/search/maps']);
  }

  public irParaPerfil() {
    if (this.usuarioAutenticado)
      this.router.navigate(['#/perfil']);
    else
      this.router.navigate(['#/login']);
  }

  ngOnDestroy(): void {
    sessionStorage.clear();
  }
}
