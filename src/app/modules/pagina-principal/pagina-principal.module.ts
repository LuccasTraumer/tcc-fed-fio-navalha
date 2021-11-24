import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { SharedModule } from '../shared/shared.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginaPrincipalRoutingModule } from './pagina-principal.routing.module';
import { HomeBarbeariaComponent } from './home-barbearia/home-barbearia.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { HomeClienteComponent } from 'src/app/modules/pagina-principal/home-cliente/home-cliente.component';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [PaginaPrincipalComponent, HomeBarbeariaComponent, PaginaPrincipalComponent, HomeClienteComponent],
  imports: [
  AgmCoreModule.forRoot({
      // apiKey: process.env.API_KEY,
      apiKey: 'AIzaSyBmXz70MR4g-XminoGFy5XiuLBtqiw-8t0',
    }),
    CommonModule,
    SharedModule,
    LoadingModule,
    PaginaPrincipalRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
   // BrowserAnimationsModule,
  ],
  exports: [PaginaPrincipalComponent, HomeBarbeariaComponent, PaginaPrincipalComponent, HomeClienteComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginaPrincipalModule {}
