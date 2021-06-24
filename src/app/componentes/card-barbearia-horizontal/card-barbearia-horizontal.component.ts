import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fdn-card-barbearia-horizontal',
  templateUrl: './card-barbearia-horizontal.component.html',
  styleUrls: ['./card-barbearia-horizontal.component.scss']
})
export class CardBarbeariaHorizontalComponent {

  public readonly AVALIACAO_ICON = 'https://raw.githubusercontent.com/LuccasTraumer/tcc-fed-fio-navalha/main/src/assets/icons/star-complete-fill.png?token=AD5NGI3POY7LM53BW53UQ3TA3T5UG';
  public readonly FAVORITO_ICON = 'https://raw.githubusercontent.com/LuccasTraumer/tcc-fed-fio-navalha/4930202aa2586c1810bb7420ed4a8884132fc099/src/assets/icons/heart-black-empty.svg?token=AD5NGI4KMLEQFNJADQN6JVLA2PHT4';
  public readonly ICONE_BARBEAIRIA = '';

  private _avalicaoBarbearia: number = 4.5;
  private _especialidadeBarbearia = '';
  private _distanciaBarbearia = '';

  private _margemAtraso = 10;
  private _tempoMedio = 50;
  private _precoMedio = 50;

  constructor() { }

  public distanciaBarbearia(): string {
    return this._distanciaBarbearia;
  }

  public especialidadeBarbearia(): string {
    return this._especialidadeBarbearia;
  }

  public avaliacaoBarbearia(): number {
    return this._avalicaoBarbearia;
  }

  public margemAtraso(): number {
    return this._tempoMedio + this._margemAtraso;
  }

  public tempoMedio(): number {
    return this._tempoMedio;
  }

  public precoMedio(): number {
    return this._precoMedio;
  }

}
