import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CadastroCpfCnpjComponent } from "./cadastro-cpf-cnpj/cadastro-cpf-cnpj.component";
import { CadastroEnderecoComponent } from "./cadastro-endereco/cadastro-endereco.component";
import { CadastroNomeSenhaComponent } from "./cadastro-nome-senha/cadastro-nome-senha.component";

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
