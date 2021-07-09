import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { UtilsModule } from '../utils/utils.module';
import { LoginRoutingModule } from './login.routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UtilsModule,
    LoginRoutingModule
  ],
  exports: [LoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
