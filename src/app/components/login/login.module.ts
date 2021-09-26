import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { UtilsModule } from '../../utils/utils.module';
import { LoginRoutingModule } from './login.routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UtilsModule,
    LoginRoutingModule,
    FormsModule,
  ],
  exports: [LoginComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
