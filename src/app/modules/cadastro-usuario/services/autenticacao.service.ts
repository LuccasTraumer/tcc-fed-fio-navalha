import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Injectable, EventEmitter, OnDestroy, Component} from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { Barbearia } from '../../../models/barbearia';
import { environment } from 'src/environments/environment';
import {CadastroServiceService} from "./cadastro-service.service";
import {Cliente} from "../../../models/Cliente";
import {LoginComponent} from "../../login/login/login.component";
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService implements OnDestroy {

  private usuarioAutenticado: boolean = true;
  clienteAutenticado = new EventEmitter<boolean>();
  private options: any;
  constructor(
    private http: HttpClient,
    private cadastroService: CadastroServiceService) {
    this.options = {
      observe: "response" as 'body',
      responseType: "json",
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }
  }

  ngOnDestroy(): void {
  }

  fazerLogin(cliente: Usuario) {
    //TODO: Fazer comunicação com o SRV e este retornar uma sessão para o usuario.
    return this.http.post(`${environment.srvTCC}/login`, cliente, this.options);
  }

  cadastrarUsuario(cliente: Usuario): Observable<Usuario>{
    if(cliente.tipoCliente == Cliente.name) {
      return this.cadastroService.cadastrarCliente(cliente as Cliente);
    } else if (cliente.tipoCliente == Barbearia.name) {
      return this.cadastroService.cadastrarBarbearia(cliente as Barbearia);
    }
  }

  usuarioEstaAutenticado(): boolean {
    return this.usuarioAutenticado;
  }

  setUsuarioAutenticado(classe: LoginComponent, usuarioAutenticado: boolean) {
    if (classe === LoginComponent.prototype)
      this.usuarioAutenticado = usuarioAutenticado;
  }
}
