import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CadastroCnpjComponent } from "./cadastro-cnpj/cadastro-cnpj.component";

import { CadastroCodigoConfirmacaoComponent } from "./cadastro-codigo-confirmacao/cadastro-codigo-confirmacao.component";
import { CadastroCpfComponent } from "./cadastro-cpf/cadastro-cpf.component";
import { CadastroDadosBarbeariaComponent } from "./cadastro-dados-barbearia/cadastro-dados-barbearia.component";
import { CadastroDadosClienteComponent } from "./cadastro-dados-cliente/cadastro-dados-cliente.component";
import { CadastroDataNascimentoComponent } from "./cadastro-data-nascimento/cadastro-data-nascimento.component";
import { CadastroEmailCelularComponent } from "./cadastro-email-celular/cadastro-email-celular.component";
import { CadastroFotoComponent } from "./cadastro-foto/cadastro-foto.component";
import { CadastroNomeSenhaComponent } from "./cadastro-nome-senha/cadastro-nome-senha.component";
import { CadastroTipoContaComponent } from "./cadastro-tipo-conta/cadastro-tipo-conta.component";
import { CadastroComponent } from './cadastro/cadastro.component';

const cadastroRoutes = [
    // {
    //   path: '',
    //   redirectTo: 'email-celular'
    // },
    // {
    //   path: 'email-celular',
    //   component: CadastroEmailCelularComponent
    // },
    // {
    //   path: 'codigo-confirmacao',
    //   component: CadastroCodigoConfirmacaoComponent
    // },
    // {
    //   path: 'tipo-conta',
    //   component: CadastroTipoContaComponent
    // },
    // {
    //   path: 'data-nascimento',
    //   component: CadastroDataNascimentoComponent
    // },
    // {
    //   path: 'info-login',
    //   component: CadastroNomeSenhaComponent
    // },
    // {
    //   path: 'info-barbearia',
    //   component: CadastroDadosBarbeariaComponent
    // },
    // {
    //   path: 'info-cliente',
    //   component: CadastroDadosClienteComponent
    // },
    // {
    //   path: 'cpf',
    //   component: CadastroCpfComponent
    // },
    // {
    //   path: 'cnpj',
    //   component: CadastroCnpjComponent
    // },
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
