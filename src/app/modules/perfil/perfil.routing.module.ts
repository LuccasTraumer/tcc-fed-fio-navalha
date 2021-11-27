import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PerfilComponent } from './perfil/perfil.component';

const perfilRoutes = [
  {
    path: '',
    component: PerfilComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(perfilRoutes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
