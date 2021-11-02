import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { Subscription } from 'rxjs';
import { CadastroServiceService } from './cadastro-service.service';
import { Cliente } from 'src/app/models/cliente';
import { Barbearia } from '../../../models/barbearia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService implements OnDestroy {

  private usuarioAutenticado: boolean = false;
  clienteAutenticado = new EventEmitter<boolean>();
  private header: any;
  private inscricao: Subscription;
  constructor(
    private http: HttpClient,
    private cadastroService: CadastroServiceService) { }

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

  async cadastrarUsuario(cliente: Usuario) {
    if(cliente.tipoCliente == Cliente.name) {
      this.cadastroService.cadastrarCliente(cliente as Cliente)
    } else if (cliente.tipoCliente == Barbearia.name) {
      return this.cadastroService.cadastrarBarbearia(cliente as Barbearia);
    }
  }

  usuarioEstaAutenticado(): boolean {
    return this.usuarioAutenticado;
  }
}
