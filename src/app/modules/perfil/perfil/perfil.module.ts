import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilComponent } from './../perfil.component';
import { PerfilRoutingModule } from './perfil.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    ReactiveFormsModule
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PerfilModule {

}
