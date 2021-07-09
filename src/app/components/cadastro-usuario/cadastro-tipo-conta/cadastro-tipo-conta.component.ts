import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fdn-cadastro-tipo-conta',
  templateUrl: './cadastro-tipo-conta.component.html',
  styleUrls: ['./cadastro-tipo-conta.component.scss']
})
export class CadastroTipoContaComponent implements OnInit {

  public opcaoSelecionada: number;

  constructor() { }

  ngOnInit(): void {
  }

}
