import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { DetalhesBarbeariaComponent } from './detalhes-barbearia/detalhes-barbearia.component';
import { DetalhesBarbeariaRoutingModule } from './detalhes-barbearia.routing.module';



@NgModule({
  declarations: [DetalhesBarbeariaComponent],
  imports: [
    CommonModule,
    DetalhesBarbeariaRoutingModule
  ],
  exports: [DetalhesBarbeariaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetalhesBarbeariaModule { }
