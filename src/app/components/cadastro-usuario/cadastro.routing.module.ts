import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { CadastroCodigoConfirmacaoComponent } from "./cadastro-codigo-confirmacao/cadastro-codigo-confirmacao.component";
import { CadastroDadosBarbeariaComponent } from "./cadastro-dados-barbearia/cadastro-dados-barbearia.component";
import { CadastroDataNascimentoComponent } from "./cadastro-data-nascimento/cadastro-data-nascimento.component";
import { CadastroEmailCelularComponent } from "./cadastro-email-celular/cadastro-email-celular.component";
import { CadastroNomeSenhaComponent } from "./cadastro-nome-senha/cadastro-nome-senha.component";
import { CadastroTipoContaComponent } from "./cadastro-tipo-conta/cadastro-tipo-conta.component";

const cadastroRoutes = [
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
      path: 'info-cliente',
      component: CadastroNomeSenhaComponent
    },
    {
      path: 'info-barbearia',
      component: CadastroDadosBarbeariaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(cadastroRoutes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
