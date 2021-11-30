import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BarbeariaDetalhes } from 'src/app/models/BarbeariaDetalhes';
import { DadosCardService } from '../services/dados-card.service';
import {Barbearia} from "../../../models/barbearia";
import {Servico} from "../../../models/Servico";

@Component({
  selector: 'fdn-card-horario-agendado',
  templateUrl: './card-horario-agendado.component.html',
  styleUrls: ['./card-horario-agendado.component.scss']
})
export class CardHorarioAgendadoComponent implements OnInit {

  servico: Servico;

  @Input() barbearia: Barbearia;

  constructor(
    private router: Router,
    private dadosCardService: DadosCardService
  ) { }

  ngOnInit() {
    this.servico = new Servico();
  }

  public detalhes(): void {
    this.dadosCardService.gravaDadosCardNaSessionStorage(this.barbearia);
    this.router.navigate(['/detalhes'], {state: {data: this.barbearia}});
  }

}
