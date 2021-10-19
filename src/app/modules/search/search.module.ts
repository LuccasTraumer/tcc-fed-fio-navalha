import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutes } from './search.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutes,
    SharedModule
  ],
  declarations: [
    SearchComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchModule { }
