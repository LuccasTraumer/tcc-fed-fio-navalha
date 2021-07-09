import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { UtilsModule } from '../utils/utils.module';
import { EsqueceuRoutingModule } from './esqueceu.routing.module';



@NgModule({
  declarations: [EsqueceuSenhaComponent],
  imports: [
    CommonModule,
    UtilsModule,
    EsqueceuRoutingModule
  ],
  exports: [EsqueceuSenhaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EsqueceuSenhaModule { }
