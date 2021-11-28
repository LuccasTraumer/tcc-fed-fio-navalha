import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as EventEmitter from 'events';
import { BarbeariaDetalhes } from 'src/app/models/BarbeariaDetalhes';
import { DadosCardService } from '../services/dados-card.service';

@Component({
  selector: 'fdn-card-horario-agendado',
  templateUrl: './card-horario-agendado.component.html',
  styleUrls: ['./card-horario-agendado.component.scss']
})
export class CardHorarioAgendadoComponent implements OnInit {

  constructor(private router: Router, private dadosCardService: DadosCardService) { }

  public barbearia: BarbeariaDetalhes = {
    nome: 'Salão do Zeca',
    rua: 'Avenida central',
    bairro: 'Dic City',
    cidade: 'Campinas',
    estado: 'SP',
    numero: '752',
    email: 'zecasalao@gmail.com',
    telefone: '(19)4002-8922'
  };
  ngOnInit() {
  }

  @Input() fotoBarbearia: String;

  public detalhes(): void {
    this.dadosCardService.gravaDadosCardNaSessionStorage(this.barbearia);
    this.router.navigate(['/detalhes'], {state: {data: this.barbearia}});
  }

}
