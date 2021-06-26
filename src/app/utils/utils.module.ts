<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
=======
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

>>>>>>> release/esteira
import { InputDataComponent } from './input-data/input-data.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [InputDataComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
<<<<<<< HEAD
  exports: [InputDataComponent, ButtonComponent]
=======
  exports: [InputDataComponent, ButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
>>>>>>> release/esteira
})
export class UtilsModule { }
