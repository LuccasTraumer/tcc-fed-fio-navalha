import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginaPrincipalRoutingModule } from './pagina-principal.routing.module';
import { HomeBarbeariaComponent } from './home-barbearia/home-barbearia.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';

@NgModule({
  declarations: [PaginaPrincipalComponent, HomeBarbeariaComponent, HomeClienteComponent],
  imports: [
  AgmCoreModule.forRoot({
      // apiKey: process.env.API_KEY,
      apiKey: 'AIzaSyBmXz70MR4g-XminoGFy5XiuLBtqiw-8t0',
    }),
    CommonModule,
    ComponentesModule,
    LoadingModule,
    PaginaPrincipalRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
   // BrowserAnimationsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBmXz70MR4g-XminoGFy5XiuLBtqiw-8t0',
    // }),
  ],
  exports: [PaginaPrincipalComponent, HomeBarbeariaComponent, HomeClienteComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginaPrincipalModule {}
