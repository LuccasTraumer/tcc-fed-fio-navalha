import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from "./guardas/auth.guard";


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'esqueceu-senha',
    loadChildren: () => import('./modules/esqueceu-senha/esqueceu-senha.module')
      .then(module => module.EsqueceuSenhaModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./modules/loading/loading.module')
      .then(module => module.LoadingModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./modules/cadastro-usuario/cadastro-usuario.module')
      .then(module => module.CadastroUsuarioModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./modules/perfil/perfil.module')
      .then(module => module.PerfilModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    loadChildren: () => import('./modules/search/search.module')
      .then(module => module.SearchModule)
  },
  {
    path: 'detalhes',
    loadChildren: () => import('./modules/detalhes-barbearia/detalhes-barbearia.routing.module')
      .then(module => module.DetalhesBarbeariaRoutingModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./modules/pagina-principal/pagina-principal.module')
      .then(module => module.PaginaPrincipalModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class  AppRoutingModule { }
