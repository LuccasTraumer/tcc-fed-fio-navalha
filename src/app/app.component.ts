import {Component, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import {Usuario} from "./models/Usuario";
import {AutenticacaoService} from "./modules/cadastro-usuario/services/autenticacao.service";
import {Cliente} from "./models/Cliente";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'Fio da Navalha';

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
  }

  public buscarBarbearia() {
    this.router.navigate(['/search']);
  }

  public irParaHome() {
    const jwtUser = sessionStorage.getItem('jwtUser');
    if(this.autenticacaoService.usuarioEstaAutenticado() && jwtUser.toLocaleLowerCase().includes('cliente'))
      this.router.navigate(['/home-cliente']);
    else if (this.autenticacaoService.usuarioEstaAutenticado() && jwtUser.toLocaleLowerCase().includes('barbearia'))
      this.router.navigate(['/home-barbearia']);
    else
      this.router.navigate(['/search/maps']);
  }

  public irParaMaps() {
    this.router.navigate(['/search/maps']);
  }

  public irParaPerfil() {
    console.log(this.autenticacaoService.usuarioEstaAutenticado());
    if (this.autenticacaoService.usuarioEstaAutenticado())
      this.router.navigate(['/perfil']);
    else{
      this.router.navigate(['/login']);
    }
  }

  ngOnDestroy(): void {
    sessionStorage.clear();
  }
}
