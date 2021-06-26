import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UtilsModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
