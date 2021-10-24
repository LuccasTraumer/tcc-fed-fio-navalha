import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';

const esqueceuRoutes = [
  {
    path: '',
    component: EsqueceuSenhaComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(esqueceuRoutes)],
  exports: [RouterModule]
})
export class EsqueceuRoutingModule { }
