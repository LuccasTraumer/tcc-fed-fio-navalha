import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { CadastroCodigoConfirmacaoComponent } from "./cadastro-codigo-confirmacao/cadastro-codigo-confirmacao.component";
import { CadastroDataNascimentoComponent } from "./cadastro-data-nascimento/cadastro-data-nascimento.component";
import { CadastroEmailCelularComponent } from "./cadastro-email-celular/cadastro-email-celular.component";
import { CadastroEnderecoComponent } from "./cadastro-endereco/cadastro-endereco.component";
import { CadastroFotoComponent } from "./cadastro-foto/cadastro-foto.component";
import { CadastroNomeSenhaComponent } from "./cadastro-nome-senha/cadastro-nome-senha.component";
import { CadastroTipoContaComponent } from "./cadastro-tipo-conta/cadastro-tipo-conta.component";
import { CadastroCpfCnpjComponent } from './cadastro-cpf-cnpj/cadastro-cpf-cnpj.component';

const cadastroRoutes = [
    {
      path: '',
      redirectTo: 'email-celular'
    },
    {
      path: 'email-celular',
      component: CadastroEmailCelularComponent
    },
    {
      path: 'codigo-confirmacao',
      component: CadastroCodigoConfirmacaoComponent
    },
    {
      path: 'tipo-conta',
      component: CadastroTipoContaComponent
    },
    {
      path: 'data-nascimento',
      component: CadastroDataNascimentoComponent
    },
    {
      path: 'dados-cliente',
      component: CadastroCpfCnpjComponent
    },
    {
      path: 'info-login',
      component: CadastroNomeSenhaComponent
    },
    {
      path: 'endereco',
      component: CadastroEnderecoComponent
    },
    {
      path: 'foto',
      component: CadastroFotoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(cadastroRoutes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
