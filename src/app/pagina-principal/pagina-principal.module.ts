import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [PaginaPrincipalComponent],
  imports: [
    CommonModule,
    ComponentesModule
  ],
  exports: [PaginaPrincipalComponent]
})
export class PaginaPrincipalModule { }
