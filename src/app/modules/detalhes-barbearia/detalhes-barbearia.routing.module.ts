import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetalhesBarbeariaComponent } from './detalhes-barbearia/detalhes-barbearia.component';


const detalhesRoutes = [
  {
    path: '',
    component: DetalhesBarbeariaComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  imports: [RouterModule.forChild(detalhesRoutes)],
  exports: [RouterModule]
})
export class DetalhesBarbeariaRoutingModule { }
