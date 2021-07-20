import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { AutenticacaoService } from '../autenticacao.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'fdn-cadastro-foto',
  templateUrl: './cadastro-foto.component.html',
  styleUrls: ['./cadastro-foto.component.scss']
})
export class CadastroFotoComponent {

  constructor(private autenticacaoService: AutenticacaoService, private http: HttpClient) { }

  onSubmit() {
    let clienteJson = sessionStorage.getItem('cliente');
    let clienteJsonParseado = JSON.parse(clienteJson);


    let cliente = new Cliente();
    cliente.fotoPerfil = 'linkFotoPerfil';

    cliente.dataNascimento = clienteJsonParseado['dataNascimento'];
    cliente.email = clienteJsonParseado['email'];
    cliente.nome = clienteJsonParseado['nome'];
    cliente.senha = clienteJsonParseado['senha'];
    cliente.telefone = clienteJsonParseado['telefone'];
    cliente.tipoCliente = clienteJsonParseado['tipoCliente'];

    this.autenticacaoService.fazerLogin(cliente);
  }
}
