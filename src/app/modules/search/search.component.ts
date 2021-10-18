import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
