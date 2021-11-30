import {Component, EventEmitter, Output} from '@angular/core';
import { ConstantesIcons } from '../../../utils/constantes.icons';
import {Barbearia} from "../../../models/barbearia";

@Component({
  selector: 'app-input-busca',
  templateUrl: './input-busca.component.html',
  styleUrls: ['./input-busca.component.scss']
})
export class InputBuscaComponent {
  @Output()
  listaBusca = new EventEmitter<Barbearia[]>();

  @Output()
  valorBuscaPreenchido = new EventEmitter<Boolean>();

  listaBarbeariasBuscadas: Barbearia[];

  constructor() { }

  getIcon() {
    return ConstantesIcons.ICONE_SEARCH_WHITE;
  }

  buscarBarbearia(valorBusca: string) {
    setTimeout(() => {
      // console.log(valorBusca);
    }, 2000);

    this.valorBuscaPreenchido.emit(valorBusca !== '' || valorBusca !== undefined);
    this.listaBusca.emit(this.listaBarbeariasBuscadas);
  }
}
