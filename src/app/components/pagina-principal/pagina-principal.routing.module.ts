import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const paginaPrincipalRoutes = [
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
