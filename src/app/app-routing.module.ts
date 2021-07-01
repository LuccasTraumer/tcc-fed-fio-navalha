import { LoadingComponent } from './loading/loading/loading.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { CardBarbeariaHorizontalComponent } from './componentes/card-barbearia-horizontal/card-barbearia-horizontal.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha/esqueceu-senha.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal/pagina-principal.component';
import { CadastroEmailCelularComponent } from './cadastro-usuario/cadastro-email-celular/cadastro-email-celular.component';
import { CadastroCodigoConfirmacaoComponent } from './cadastro-usuario/cadastro-codigo-confirmacao/cadastro-codigo-confirmacao.component';
import { CadastroTipoContaComponent } from './cadastro-usuario/cadastro-tipo-conta/cadastro-tipo-conta.component';

const routes: Routes = [
  {
    path: '',
    component: PaginaPrincipalComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cards',
    component: CardBarbeariaHorizontalComponent
  },
  {
    path: 'esqueceu',
    component: EsqueceuSenhaComponent
  },
  {
    path: 'loading',
    component: LoadingComponent
  },
  {
    path: 'cadastroEmailCelular',
    component: CadastroEmailCelularComponent
  },
  {
    path: 'cadastroCodigoConfirmacao',
    component: CadastroCodigoConfirmacaoComponent
  },
  {
    path: 'cadastroTipoConta',
    component: CadastroTipoContaComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
