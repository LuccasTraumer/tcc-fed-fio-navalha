import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardBarbeariaHorizontalComponent } from './card-barbearia-horizontal/card-barbearia-horizontal.component';
import { CardBarbeariaVerticalComponent } from './card-barbearia-vertical/card-barbearia-vertical.component';



@NgModule({
  declarations: [CardBarbeariaHorizontalComponent, CardBarbeariaVerticalComponent],
  imports: [
    CommonModule
  ],
<<<<<<< HEAD
  exports: [CardBarbeariaHorizontalComponent, CardBarbeariaVerticalComponent]
=======
  exports: [CardBarbeariaHorizontalComponent, CardBarbeariaVerticalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
>>>>>>> release/esteira
})
export class ComponentesModule { }
