import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilComponent } from './perfil/perfil.component'
import { PerfilRoutingModule } from './perfil.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PerfilModule {

}
