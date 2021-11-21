import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeClienteComponent } from 'src/app/modules/pagina-principal/home-cliente/home-cliente.component';
import { HomeBarbeariaComponent } from './home-barbearia/home-barbearia.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

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
    redirectTo: 'explorar',
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
