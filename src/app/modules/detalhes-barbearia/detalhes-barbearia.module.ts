import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalhesBarbeariaComponent } from './detalhes-barbearia/detalhes-barbearia.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DetalhesBarbeariaComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [DetalhesBarbeariaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetalhesBarbeariaModule { }
