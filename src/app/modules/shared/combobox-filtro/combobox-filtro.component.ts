import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'fdn-combobox-filtro',
  templateUrl: './combobox-filtro.component.html',
  styleUrls: ['./combobox-filtro.component.scss']
})
export class ComboboxFiltroComponent {

  @Input()
  filtro: {
    nomeCampo: string,
    maiorParaMenor: string,
    menorParaMaior: string
  };

  constructor() { }

}
