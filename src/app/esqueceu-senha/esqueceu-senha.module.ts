import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [EsqueceuSenhaComponent],
  imports: [
    CommonModule,
    UtilsModule
  ],
  exports: [EsqueceuSenhaComponent]
})
export class EsqueceuSenhaModule { }
