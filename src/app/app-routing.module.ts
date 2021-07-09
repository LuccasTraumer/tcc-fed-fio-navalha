import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardBarbeariaHorizontalComponent } from './components/componentes/card-barbearia-horizontal/card-barbearia-horizontal.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/pagina-principal/pagina-principal.module').then(module => module.PaginaPrincipalModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'cards',
    component: CardBarbeariaHorizontalComponent
  },
  {
    path: 'esqueceu',
    loadChildren: () => import('./components/esqueceu-senha/esqueceu-senha.module').then(module => module.EsqueceuSenhaModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./components/loading/loading.module').then(module => module.LoadingModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./components/cadastro-usuario/cadastro-usuario.module').then(module => module.CadastroUsuarioModule)
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
