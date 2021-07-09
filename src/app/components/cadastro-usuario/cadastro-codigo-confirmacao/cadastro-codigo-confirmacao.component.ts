import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fdn-cadastro-codigo-confirmacao',
  templateUrl: './cadastro-codigo-confirmacao.component.html',
  styleUrls: ['./cadastro-codigo-confirmacao.component.scss']
})
export class CadastroCodigoConfirmacaoComponent implements OnInit {

  @Input('opcao') opcaoEnvio: string;

  constructor() { }

  ngOnInit(): void {
  }

}
