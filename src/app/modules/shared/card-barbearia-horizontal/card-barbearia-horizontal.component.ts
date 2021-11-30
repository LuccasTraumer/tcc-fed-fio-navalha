import {Component, Input} from '@angular/core';

import { ConstantesIcons } from "../../../utils/constantes.icons";
import {Barbearia} from "../../../models/barbearia";
import {Card} from "../models/card";

@Component({
  selector: 'fdn-card-barbearia-horizontal',
  templateUrl: './card-barbearia-horizontal.component.html',
  styleUrls: ['./card-barbearia-horizontal.component.scss']
})
export class CardBarbeariaHorizontalComponent implements Card {

  @Input()
  barbearia: Barbearia;

  public readonly AVALIACAO_ICON = ConstantesIcons.ICONE_AVALIACAO_METADE;
  public readonly FAVORITO_ICON = ConstantesIcons.ICONE_FAVORITO_PREENCHIDO_BLACK;

  private _distanciaBarbearia = 50;
  private _margemAtraso = 10;

  constructor() { }

  public distanciaBarbearia() {
    return this._distanciaBarbearia;
  }

  public margemAtraso(): number {
    return this.barbearia.tempoMedio + this._margemAtraso;
  }

  public irBarbearia() {
    // console.log('Vou para barbearia');
  }

  public avaliarBarbearia() {
    // console.log('Vou avaliar a barbearia');
  }

  public favoritarBarbearia() {
    // console.log('Vou favoritar barbearia');
  }
}
