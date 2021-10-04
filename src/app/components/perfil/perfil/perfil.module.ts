import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilComponent } from './perfil.component'
import { PerfilRoutingModule } from './perfil.routing.module';
import { UtilsModule } from 'src/app/utils/utils.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    UtilsModule,
    PerfilRoutingModule,
    ReactiveFormsModule
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PerfilModule {

}
