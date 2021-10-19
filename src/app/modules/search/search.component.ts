import { Component, OnInit } from '@angular/core';
import {Barbearia} from "../../models/barbearia";
import {ConstantesIcons} from "../../utils/constantes.icons";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  listaFiltros = [
    {
      nomeCampo: 'Distância',
      maiorParaMenor: 'Mais distantes',
      menorParaMaior: 'Mais Proximas'
    },
    {
      nomeCampo: 'Preco',
      maiorParaMenor: 'Maiores Preços',
      menorParaMaior: 'Menores Preços'
    },
    // {
    //   nomeCampo: 'Avaliação',
    //   maiorParaMenor: 'Maior Avaliação',
    //   menorParaMaior: 'Menores Avaliações'
    // },
  ];

  listaBarbearia = [];

  constructor() {
    const barbearia = new Barbearia();
    barbearia.nome = 'Roni Barbearia';
    barbearia.fotoPerfil = ConstantesIcons.BARBEARIA_FOTO;
    barbearia.avaliacaoBarbearia = 4.5;
    barbearia.especialidade = 'Black Power';
    barbearia.precoMedio = 50.0;
    barbearia.tempoMedio = 25;

    this.listaBarbearia.push(barbearia);
    this.listaBarbearia.push(barbearia);
    this.listaBarbearia.push(barbearia);
    this.listaBarbearia.push(barbearia);
  }

  ngOnInit() {
  }

}
