import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LoadingComponent } from './loading/loading.component';

const loandingRoutes = [
  {
    path: '',
    component: LoadingComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(loandingRoutes)],
  exports: [RouterModule]
})

export class LoandingRoutingModule { }
