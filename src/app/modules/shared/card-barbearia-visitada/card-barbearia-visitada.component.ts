import { Component, Input, OnInit } from '@angular/core';
import { Barbearia } from 'src/app/models/barbearia';
import {ConstantesIcons} from "../../../utils/constantes.icons";
import {Router} from "@angular/router";
import {DadosCardService} from "../services/dados-card.service";

@Component({
  selector: 'fdn-card-barbearia-visitada',
  templateUrl: './card-barbearia-visitada.component.html',
  styleUrls: ['./card-barbearia-visitada.component.scss']
})
export class CardBarbeariaVisitadaComponent implements OnInit {

  iconeAvaliacao = ConstantesIcons.ICONE_AVALIACAO_PREENCHIDA;
  @Input() barbearia: Barbearia;

  constructor(
    private router: Router,
    private dadosCardService: DadosCardService
  ) { }

  ngOnInit() {
  }

  public detalhes(): void {
    this.dadosCardService.gravaDadosCardNaSessionStorage(this.barbearia);
    this.router.navigate(['/detalhes'], {state: {data: this.barbearia}});
  }
}
