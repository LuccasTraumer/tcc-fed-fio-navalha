import { Component, Input, OnInit } from '@angular/core';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';
import { Barbearia } from '../../../models/barbearia';

@Component({
  selector: 'fdn-card-barbearia-vertical',
  templateUrl: './card-barbearia-vertical.component.html',
  styleUrls: ['./card-barbearia-vertical.component.scss']
})
export class CardBarbeariaVerticalComponent implements OnInit {

  // @Input()
  barbearia: Barbearia;


  constructor() {
    this.barbearia = new Barbearia();
    this.barbearia.fotoPerfil = ConstantesIcons.BARBEARIA_FOTO;
    this.barbearia.nome = 'Lucas Barbearia';
    this.barbearia.avaliacaoBarbearia = 5.0;
    this.barbearia.tempoMedio = 10;
    this.barbearia.especialidade = 'Cabelo Rasto';
  }

  ngOnInit(): void {
  }

  calcularDistanciaBarbearia() {
    return '10KM';
  }

  pegarImagemAvaliacao(): string {
    if (this.barbearia.avaliacaoBarbearia < 2) {
      return ConstantesIcons.ICONE_FAVORITO_VAZIA;
    } else if(this.barbearia.avaliacaoBarbearia >  2 && this.barbearia.avaliacaoBarbearia < 4) {
      return ConstantesIcons.ICONE_FAVORITO_METADE;
    } else {
      return ConstantesIcons.ICONE_FAVORITO_PREENCHIDA;
    }
  }
}
