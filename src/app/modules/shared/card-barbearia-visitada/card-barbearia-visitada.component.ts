import { Component, Input, OnInit } from '@angular/core';
import { Barbearia } from 'src/app/models/barbearia';
import {ConstantesIcons} from "../../../utils/constantes.icons";

@Component({
  selector: 'fdn-card-barbearia-visitada',
  templateUrl: './card-barbearia-visitada.component.html',
  styleUrls: ['./card-barbearia-visitada.component.scss']
})
export class CardBarbeariaVisitadaComponent implements OnInit {

  iconeAvaliacao = ConstantesIcons.ICONE_AVALIACAO_PREENCHIDA;

  constructor() { }

  ngOnInit() {
  }

  @Input() barbearia: Barbearia;
}
