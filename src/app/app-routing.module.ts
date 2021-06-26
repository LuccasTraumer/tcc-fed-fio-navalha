import { LoadingComponent } from './loading/loading/loading.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { CardBarbeariaHorizontalComponent } from './componentes/card-barbearia-horizontal/card-barbearia-horizontal.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha/esqueceu-senha.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal/pagina-principal.component';

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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
