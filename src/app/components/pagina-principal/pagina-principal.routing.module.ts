import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const mainRoutes = [
  {
    path: 'home',
    component: PaginaPrincipalComponent
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
