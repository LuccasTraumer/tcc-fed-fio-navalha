import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { LoadingModule } from '../loading/loading.module';



@NgModule({
  declarations: [PaginaPrincipalComponent],
  imports: [
    CommonModule,
    ComponentesModule,
    LoadingModule
  ],
  exports: [PaginaPrincipalComponent]
})
export class PaginaPrincipalModule { }