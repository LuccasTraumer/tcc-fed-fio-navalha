import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from 'src/app/models/Cliente';
import { AutenticacaoService } from '../autenticacao.service';

@Component({
  selector: 'fdn-cadastro-foto',
  templateUrl: './cadastro-foto.component.html',
  styleUrls: ['./cadastro-foto.component.scss']
})
export class CadastroFotoComponent {

  @Input()
  public cliente: Cliente;

  constructor(private autenticacaoService: AutenticacaoService, private http: HttpClient) { }

  onSubmit() {
    this.autenticacaoService.fazerLogin(this.cliente);
  }
}
