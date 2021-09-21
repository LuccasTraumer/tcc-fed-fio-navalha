
import { PerfilComponent } from './../perfil.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule
  ],
  exports:[PerfilComponent]
})

export class PerfilModule {

}
