import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardBarbeariaHorizontalComponent } from './card-barbearia-horizontal/card-barbearia-horizontal.component';
import { CardBarbeariaVerticalComponent } from './card-barbearia-vertical/card-barbearia-vertical.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [CardBarbeariaHorizontalComponent, CardBarbeariaVerticalComponent, MenuComponent],
  imports: [
    CommonModule
  ],
  exports: [CardBarbeariaHorizontalComponent, CardBarbeariaVerticalComponent, MenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentesModule { }
