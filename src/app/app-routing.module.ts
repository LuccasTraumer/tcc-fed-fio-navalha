import { PerfilModule } from './modules/perfil/perfil/perfil.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardBarbeariaHorizontalComponent } from './modules/shared/card-barbearia-horizontal/card-barbearia-horizontal.component';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'cards',
    component: CardBarbeariaHorizontalComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'esqueceu-senha',
    loadChildren: () => import('./modules/esqueceu-senha/esqueceu-senha.module').then(module => module.EsqueceuSenhaModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./modules/loading/loading.module').then(module => module.LoadingModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./modules/cadastro-usuario/cadastro-usuario.module').then(module => module.CadastroUsuarioModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./modules/perfil/perfil/perfil.module').then(module => module.PerfilModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./modules/search/search.module').then(module => module.SearchModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/pagina-principal/pagina-principal.module').then(module => module.PaginaPrincipalModule),
    // canActivate: [AuthGuard]
    // can load
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class  AppRoutingModule { }
