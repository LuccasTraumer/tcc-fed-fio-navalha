import { Component, Input, OnInit } from '@angular/core';
import { Barbearia } from 'src/app/models/barbearia';

@Component({
  selector: 'fdn-card-barbearia-visitada',
  templateUrl: './card-barbearia-visitada.component.html',
  styleUrls: ['./card-barbearia-visitada.component.scss']
})
export class CardBarbeariaVisitadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() barbearia: Barbearia;

  @Input() fotoBarbearia: String;


}
