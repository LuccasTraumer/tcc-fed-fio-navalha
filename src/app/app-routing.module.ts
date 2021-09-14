import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardBarbeariaHorizontalComponent } from './components/componentes/card-barbearia-horizontal/card-barbearia-horizontal.component';


const routes: Routes = [
  {
    path: 'principal',
    loadChildren: () => import('./components/pagina-principal/pagina-principal.module').then(module => module.PaginaPrincipalModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'cards',
    component: CardBarbeariaHorizontalComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'esqueceu-senha',
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
    path: 'teste',
    loadChildren: () => import('./components/pagina-principal/pagina-principal.module').then(module => module.PaginaPrincipalModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./components/pagina-principal/pagina-principal.module').then(module => module.PaginaPrincipalModule),
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
export class AppRoutingModule { }
