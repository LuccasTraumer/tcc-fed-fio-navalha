import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardBarbeariaHorizontalComponent } from './card-barbearia-horizontal/card-barbearia-horizontal.component';
import { CardBarbeariaVerticalComponent } from './card-barbearia-vertical/card-barbearia-vertical.component';
import { MenuComponent } from './menu/menu.component';
import { CardPedidoCorteComponent } from './card-pedido-corte/card-pedido-corte.component';
import { CardBarbeariaVisitadaComponent } from './card-barbearia-visitada/card-barbearia-visitada.component';
import { CardHorarioAgendadoComponent } from './card-horario-agendado/card-horario-agendado.component';



@NgModule({
  declarations: [
    CardBarbeariaHorizontalComponent,
    CardBarbeariaVerticalComponent,
    CardPedidoCorteComponent,
    CardBarbeariaVisitadaComponent,
    CardHorarioAgendadoComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardBarbeariaHorizontalComponent,
    CardBarbeariaVerticalComponent,
    CardPedidoCorteComponent,
    CardBarbeariaVisitadaComponent,
    CardHorarioAgendadoComponent,
    MenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentesModule { }
