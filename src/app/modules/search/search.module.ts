import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SearchRoutes } from './search.routing';
import { SharedModule } from '../shared/shared.module';
import { MapsComponent } from './maps/maps.component';
import {AgmCoreModule} from "@agm/core";
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
  AgmCoreModule.forRoot({
      // apiKey: process.env.API_KEY,
      apiKey: environment.MAPS_KEY,
    }),
    CommonModule,
    SearchRoutes,
    SharedModule
  ],
  declarations: [
    SearchComponent,
    MapsComponent,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBmXz70MR4g-XminoGFy5XiuLBtqiw-8t0',
    // }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchModule { }
