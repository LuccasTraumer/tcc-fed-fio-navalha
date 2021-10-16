import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardBarbeariaHorizontalComponent } from './card-barbearia-horizontal/card-barbearia-horizontal.component';
import { CardBarbeariaVerticalComponent } from './card-barbearia-vertical/card-barbearia-vertical.component';
import { MenuComponent } from './menu/menu.component';
import { CardPedidoCorteComponent } from './card-pedido-corte/card-pedido-corte.component';
import {InputBuscaComponent} from "./input-busca/input-busca.component";



@NgModule({
  declarations: [
    CardBarbeariaHorizontalComponent,
    CardBarbeariaVerticalComponent,
    CardPedidoCorteComponent,
    MenuComponent,
    InputBuscaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardBarbeariaHorizontalComponent,
    CardBarbeariaVerticalComponent,
    CardPedidoCorteComponent,
    MenuComponent,
    InputBuscaComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
