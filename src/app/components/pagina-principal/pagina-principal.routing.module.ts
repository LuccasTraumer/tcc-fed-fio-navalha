import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeBarbeariaComponent } from './home-barbearia/home-barbearia.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const paginaPrincipalRoutes = [
  {
    path: 'home-barbearia',
    component: HomeBarbeariaComponent
  },
  {
    path: 'explorar',
    component: PaginaPrincipalComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(paginaPrincipalRoutes),

  ],
  exports: [RouterModule]
})
export class PaginaPrincipalRoutingModule { }
