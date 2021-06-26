import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBarbeariaHorizontalComponent } from './card-barbearia-horizontal/card-barbearia-horizontal.component';
import { CardBarbeariaVerticalComponent } from './card-barbearia-vertical/card-barbearia-vertical.component';



@NgModule({
  declarations: [CardBarbeariaHorizontalComponent, CardBarbeariaVerticalComponent],
  imports: [
    CommonModule
  ],
  exports: [CardBarbeariaHorizontalComponent, CardBarbeariaVerticalComponent]
})
export class ComponentesModule { }
