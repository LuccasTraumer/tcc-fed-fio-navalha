import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardBarbeariaHorizontalComponent } from './card-barbearia-horizontal/card-barbearia-horizontal.component';
import { MenuComponent } from './menu/menu.component';
import {InputBuscaComponent} from "./input-busca/input-busca.component";
import {ButtonComponent} from "./button/button.component";
import {InputDataComponent} from "./input-data/input-data.component";
import { ComboboxFiltroComponent } from './combobox-filtro/combobox-filtro.component';
import {FormsModule} from "@angular/forms";
import { LoginModule } from '../login/login.module';
import { CardPedidoCorteComponent } from './card-pedido-corte/card-pedido-corte.component';
import { CardBarbeariaVisitadaComponent } from './card-barbearia-visitada/card-barbearia-visitada.component';
import { CardHorarioAgendadoComponent } from './card-horario-agendado/card-horario-agendado.component';
import { CardBarbeariaVerticalComponent } from './card-barbearia-vertical/card-barbearia-vertical.component';
import { CardBarbeariaFavoritaComponent } from './card-barbearia-favorita/card-barbearia-favorita.component';

@NgModule({
  declarations: [
    CardBarbeariaHorizontalComponent,
    CardBarbeariaVerticalComponent,
    CardPedidoCorteComponent,
    CardBarbeariaVisitadaComponent,
    CardHorarioAgendadoComponent,
    CardBarbeariaFavoritaComponent,
    MenuComponent,
    InputBuscaComponent,
    ButtonComponent,
    InputDataComponent,
    ComboboxFiltroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CardBarbeariaHorizontalComponent,
    CardBarbeariaVerticalComponent,
    CardPedidoCorteComponent,
    CardBarbeariaVisitadaComponent,
    CardHorarioAgendadoComponent,
    CardBarbeariaFavoritaComponent,
    MenuComponent,
    InputBuscaComponent,
    ButtonComponent,
    InputDataComponent,
    ComboboxFiltroComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule { }
