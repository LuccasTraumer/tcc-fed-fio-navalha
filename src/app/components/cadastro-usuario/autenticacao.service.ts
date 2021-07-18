import { Injectable, EventEmitter } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private usuarioAutenticado: boolean = false;
  clienteAutenticado = new EventEmitter<boolean>();

  constructor() { }

  fazerLogin(cliente: Cliente) {
    this.usuarioAutenticado = true;
    this.clienteAutenticado.emit(this.usuarioAutenticado);
  }

  usuarioEstaAutenticado(): boolean{
    return this.usuarioAutenticado;
  }
}
