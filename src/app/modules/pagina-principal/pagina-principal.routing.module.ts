import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeBarbeariaComponent } from './home-barbearia/home-barbearia.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import {HomeClienteComponent} from "./home-cliente/home-cliente.component";

const mainRoutes = [
  {
    path: 'home-barbearia',
    component: HomeBarbeariaComponent
  },
  {
    path: 'home-cliente',
    component: HomeClienteComponent
  },
  {
    path: 'explorar',
    component: PaginaPrincipalComponent
  },
  {
    path: '',
    redirectTo: '/search/maps',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class PaginaPrincipalRoutingModule { }
