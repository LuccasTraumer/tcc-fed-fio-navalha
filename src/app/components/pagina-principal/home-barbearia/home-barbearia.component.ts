import { Component, OnInit } from '@angular/core';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';

@Component({
  selector: 'fdn-home-barbearia',
  templateUrl: './home-barbearia.component.html',
  styleUrls: ['./home-barbearia.component.scss']
})
export class HomeBarbeariaComponent implements OnInit {
 public setaIcone = ConstantesIcons.ICONE_SETA_PRA_BAIXO;
 public isPedidosExibido: boolean = true;
 public isAgendamentosExibido: boolean = true;
 constructor() { }

  ngOnInit(): void {
  }

  slider(container: number) {
    if(container == 1)
      this.isPedidosExibido = !this.isPedidosExibido;
    else
      this.isAgendamentosExibido = !this.isAgendamentosExibido;
  }

}
