import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputDataComponent } from './input-data/input-data.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [InputDataComponent, ButtonComponent],
  imports: [
    CommonModule,
  ],
  exports: [InputDataComponent, ButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UtilsModule { }
