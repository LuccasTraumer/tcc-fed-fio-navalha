import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fdn-card-barbearia-horizontal',
  templateUrl: './card-barbearia-horizontal.component.html',
  styleUrls: ['./card-barbearia-horizontal.component.scss']
})
export class CardBarbeariaHorizontalComponent {

  public readonly AVALIACAO_ICON = 'https://raw.githubusercontent.com/LuccasTraumer/tcc-fed-fio-navalha/main/src/assets/icons/star-complete-fill.png?token=AD5NGI3POY7LM53BW53UQ3TA3T5UG';
  public readonly FAVORITO_ICON = 'https://raw.githubusercontent.com/LuccasTraumer/tcc-fed-fio-navalha/in-progress/src/assets/icons/heart-black-fill.png?token=AD5NGI2V477SGBUUM3TVGJTA3UH4U';
  public readonly ICONE_BARBEAIRIA = 'https://raw.githubusercontent.com/LuccasTraumer/tcc-fed-fio-navalha/in-progress/src/assets/icons/barbearia_icone_exemplo.jpg?token=AD5NGI7X2PZSKPHUP447SODA3UGUI';

  private _avalicaoBarbearia: number = 4.5;
  private _especialidadeBarbearia = 'Black power';
  private _distanciaBarbearia = 50;

  private _margemAtraso = 10;
  private _tempoMedio = 50;
  private _precoMedio = 50;
  private _nomeBarbearia = 'Roni Barbearia';

  constructor() { }

  public nomeBarbearia(): string {
    return this._nomeBarbearia;
  }

  public distanciaBarbearia() {
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
