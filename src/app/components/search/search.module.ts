import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutes } from './search.routing';
import { InputBuscaComponent } from './input-busca/input-busca.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutes,
  ],
  declarations: [
    SearchComponent,
    InputBuscaComponent
  ]
})
export class SearchModule { }
