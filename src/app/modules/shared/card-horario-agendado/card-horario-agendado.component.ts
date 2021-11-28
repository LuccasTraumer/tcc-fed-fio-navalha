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

  constructor(
    private router: Router,
    private dadosCardService: DadosCardService
  ) { }

  public barbeariaDetalhes: BarbeariaDetalhes;
  ngOnInit() {
    this.servico = new Servico();

    this.barbeariaDetalhes = {
      nome: this.barbearia.nome,
      rua: this.barbearia.endereco.logradouro,
      bairro: this.barbearia.endereco.bairro,
      cidade: this.barbearia.endereco.localidade,
      estado: this.barbearia.endereco.uf,
      numero: this.barbearia.endereco.numeroResidencia,
      email: this.barbearia.email,
      telefone: this.barbearia.telefone
    };
  }

  @Input() barbearia: Barbearia;

  public detalhes(): void {
    this.dadosCardService.gravaDadosCardNaSessionStorage(this.barbeariaDetalhes);
    this.router.navigate(['/detalhes'], {state: {data: this.barbeariaDetalhes}});
  }

}
