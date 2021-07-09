import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginaPrincipalRoutingModule } from './pagina-principal.routing.module';



@NgModule({
  declarations: [PaginaPrincipalComponent],
  imports: [
    CommonModule,
    ComponentesModule,
    LoadingModule,
    PaginaPrincipalRoutingModule
  ],
  exports: [PaginaPrincipalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginaPrincipalModule { }
