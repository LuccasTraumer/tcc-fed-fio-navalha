import { Component, Input, OnInit } from '@angular/core';
import { Barbearia } from 'src/app/models/barbearia';
import {ConstantesIcons} from "../../../utils/constantes.icons";

@Component({
  selector: 'fdn-card-barbearia-favorita',
  templateUrl: './card-barbearia-favorita.component.html',
  styleUrls: ['./card-barbearia-favorita.component.scss']
})
export class CardBarbeariaFavoritaComponent implements OnInit {

  @Input() barbearia: Barbearia;
  @Input() distancia: Number = 0;
  @Input() tempo: Number = 0;
  @Input() valor: Number = 0;

  public favorito: boolean = true;
  public iconeFavoritar: String = ConstantesIcons.ICONE_AVALIACAO_PREENCHIDA;

  public Favoritar(): void {
    this.favorito = !this.favorito;
    if(this.favorito)
      this.iconeFavoritar = ConstantesIcons.ICONE_FAVORITO_PREENCHIDO_BLACK;
    else
      this.iconeFavoritar = ConstantesIcons.ICONE_FAVORITO_PREENCHIDO_WHITE;
  }

  constructor() { }

  ngOnInit() {}

}
