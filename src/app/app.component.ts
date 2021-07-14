import { Component } from '@angular/core';
import { Cliente } from './models/Cliente';
import { ClienteVarejo } from './models/ClienteVarejo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tcc-fed-fio-navalha';

  cliente: Cliente;

  constructor() {
    this.cliente = new ClienteVarejo();
    this.cliente.fotoPerfil = '../assets/icons/barbearia_icone_exemplo.jpg'
  }
}
