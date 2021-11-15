import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeBarbeariaComponent } from './home-barbearia/home-barbearia.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const mainRoutes = [
  {
    path: 'home-barbearia',
    component: HomeBarbeariaComponent
  },
  {
    path: 'home-cliente',
    component: PaginaPrincipalComponent
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
