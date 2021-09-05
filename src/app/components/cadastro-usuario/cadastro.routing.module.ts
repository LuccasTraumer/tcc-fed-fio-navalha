import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';


const cadastroRoutes = [
    {
      path: '',
      component: CadastroComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(cadastroRoutes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
