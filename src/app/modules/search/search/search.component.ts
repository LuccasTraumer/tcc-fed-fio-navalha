import { Component, OnInit } from '@angular/core';
import {Barbearia} from "../../../models/barbearia";
import {ConstantesIcons} from "../../../utils/constantes.icons";
import {SearchService} from "../service/search.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  foiEfetuadaBusca: boolean;

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

  constructor(private service: SearchService) {
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

  setListaBarbearias(barbearias: Barbearia[]) {
    this.listaBarbearia = barbearias;
  }

  setBuscaEfetuada(buscaFeita: boolean) {
    this.foiEfetuadaBusca = buscaFeita;
  }

  ngOnInit() {
    this.service.buscarDadosIniciais()
      .pipe(take(1))
      .subscribe(response => {
        // console.log(response);
      }, error => {

      });
  }

}
