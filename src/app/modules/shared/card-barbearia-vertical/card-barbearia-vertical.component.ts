import { Component, Input, OnInit } from '@angular/core';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';
import { Barbearia } from '../../../models/barbearia';
import {Card} from "../models/card";

@Component({
  selector: 'fdn-card-barbearia-vertical',
  templateUrl: './card-barbearia-vertical.component.html',
  styleUrls: ['./card-barbearia-vertical.component.scss']
})
export class CardBarbeariaVerticalComponent implements OnInit, Card {

  @Input()
  barbearia: Barbearia;

  constructor() { }

  ngOnInit(): void {
  }

  calcularDistanciaBarbearia() {
    return '10KM';
  }

  pegarImagemAvaliacao(): string {
    if (this.barbearia.avaliacaoBarbearia < 2) {
      return ConstantesIcons.ICONE_AVALIACAO_VAZIA;
    } else if(this.barbearia.avaliacaoBarbearia >  2 && this.barbearia.avaliacaoBarbearia < 4) {
      return ConstantesIcons.ICONE_AVALIACAO_METADE;
    } else {
      return ConstantesIcons.ICONE_AVALIACAO_PREENCHIDA;
    }
  }

  avaliarBarbearia() {
  }

  favoritarBarbearia() {
  }

  irBarbearia() {
  }
}
