import { Component, Input, OnInit } from '@angular/core';
import { Barbearia } from 'src/app/models/barbearia';
import { BarbeariaDetalhes } from 'src/app/models/BarbeariaDetalhes';
import {Servico} from "../../../models/Servico";
import {Cliente} from "../../../models/Cliente";

@Component({
  selector: 'fdn-detalhes-barbearia',
  templateUrl: './detalhes-barbearia.component.html',
  styleUrls: ['./detalhes-barbearia.component.scss'],
})
export class DetalhesBarbeariaComponent implements OnInit {

  public favoritarTxt: string = 'Seguir';
  public favoritarIcon: string = '../../../../assets/icons/white-hearth.png';
  public favorito: boolean = false;
  public dataAtual: Date = new Date();
  public horario;
  public servico;

  public barbearia: BarbeariaDetalhes;

  constructor() { }

  ngOnInit() {
      this.barbearia = history.state.data == undefined ? this.obterDadosSessionStorage() : history.state.data;
  }

 private obterDadosSessionStorage(): BarbeariaDetalhes {
    let barbearia: BarbeariaDetalhes = {
      nome: sessionStorage.getItem('nome-info'),
      rua: sessionStorage.getItem('rua-info'),
      bairro: sessionStorage.getItem('bairro-info'),
      cidade: sessionStorage.getItem('cidade-info'),
      estado: sessionStorage.getItem('estado-info'),
      numero: sessionStorage.getItem('numero-info'),
      email: sessionStorage.getItem('email-info'),
      telefone: sessionStorage.getItem('telefone-info')
    };
    return barbearia;
  }

  public recebeBarbearia(barbearia: any) {

  }

  public salvarHorario(event) {
    this.horario = event;
  }

  public salvarServico(event) {
    let servico = new Servico();
    servico.prestadorServico = this.barbearia as any as Barbearia;
    servico.dataCorte = this.dataAtual;
    servico.valorCorte = event.split('$')[1];
    servico.consumidor = sessionStorage.getItem('jwtUser') as any as Cliente;
    servico.inicioCorte = this.horario;

    console.log(servico);
    this.servico = event;
  }

  public favoritar(): void {
    this.favorito = !this.favorito;
    if (!this.favorito) {
      this.favoritarTxt = "Seguir";
      this.favoritarIcon = "../../../../assets/icons/white-hearth.png";
    }
    else {
      this.favoritarTxt = "Deixar de Seguir";
      this.favoritarIcon = "../../../../assets/icons/black-hearth.png";
    }

  }
}
