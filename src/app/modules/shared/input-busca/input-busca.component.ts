import { Component, OnInit } from '@angular/core';
import { ConstantesIcons } from '../../../utils/constantes.icons';

@Component({
  selector: 'app-input-busca',
  templateUrl: './input-busca.component.html',
  styleUrls: ['./input-busca.component.scss']
})
export class InputBuscaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getIcon() {
    return ConstantesIcons.ICONE_SEARCH_WHITE;
  }
}
