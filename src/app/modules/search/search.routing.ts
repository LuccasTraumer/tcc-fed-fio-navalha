import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import {MapsComponent} from "./maps/maps.component";

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutes { };
