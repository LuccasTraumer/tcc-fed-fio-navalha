import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { AutenticacaoService } from '../autenticacao.service';

@Component({
  selector: 'fdn-cadastro-foto',
  templateUrl: './cadastro-foto.component.html',
  styleUrls: ['./cadastro-foto.component.scss']
})
export class CadastroFotoComponent implements OnInit {

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit() {
  }

  onSubmit() {
    let cliente = new Cliente();
    this.autenticacaoService.fazerLogin(cliente);
  }
}
