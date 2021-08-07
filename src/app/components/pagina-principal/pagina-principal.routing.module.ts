import { NgModule } from '@angular/core';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { RouterModule } from '@angular/router';

const paginaPrincipalRoutes = [
  {
    path: '',
    component: PaginaPrincipalComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(paginaPrincipalRoutes)],
  exports: [RouterModule]
})
export class PaginaPrincipalRoutingModule { }
