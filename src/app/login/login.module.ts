import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UtilsModule
  ],
  exports: [LoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
