import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService implements OnDestroy{

  private usuarioAutenticado: boolean = false;
  clienteAutenticado = new EventEmitter<boolean>();
  private header: any;
  private inscricao: Subscription;
  constructor(private http: HttpClient) { }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  fazerLogin(cliente: Usuario): Subscription {
    this.usuarioAutenticado = true;
    this.clienteAutenticado.emit(this.usuarioAutenticado);

    //TODO: Fazer comunicação com o SRV e este retornar uma sessão para o usuario.
    this.inscricao = this.http.post(`${environment.srvTCC}`, cliente, this.header).subscribe();
    return this.inscricao;
  }

  cadastrarUsuario(cliente: Usuario) {
  }

  usuarioEstaAutenticado(): boolean {
    return this.usuarioAutenticado;
  }
}
