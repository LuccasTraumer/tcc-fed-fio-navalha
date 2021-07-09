import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardBarbeariaHorizontalComponent } from './componentes/card-barbearia-horizontal/card-barbearia-horizontal.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pagina-principal/pagina-principal.module').then(module => module.PaginaPrincipalModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'cards',
    component: CardBarbeariaHorizontalComponent
  },
  {
    path: 'esqueceu',
    loadChildren: () => import('./esqueceu-senha/esqueceu-senha.module').then(module => module.EsqueceuSenhaModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then(module => module.LoadingModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro-usuario/cadastro-usuario.module').then(module => module.CadastroUsuarioModule)
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
