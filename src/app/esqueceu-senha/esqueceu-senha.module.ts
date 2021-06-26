import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [EsqueceuSenhaComponent],
  imports: [
    CommonModule,
    UtilsModule
  ],
  exports: [EsqueceuSenhaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EsqueceuSenhaModule { }
