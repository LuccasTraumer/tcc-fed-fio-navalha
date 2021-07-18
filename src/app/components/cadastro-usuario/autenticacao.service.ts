import { Injectable, EventEmitter } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  clienteAutenticado = new EventEmitter<boolean>();

  constructor() { }

  fazerLogin(cliente: Cliente) {
    this.clienteAutenticado.emit(true);
  }
}
