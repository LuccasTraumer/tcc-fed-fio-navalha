import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading/loading.component';
import { LoandingRoutingModule } from './loanding.routing.module';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    LoandingRoutingModule
  ],
  exports: [LoadingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoadingModule { }
