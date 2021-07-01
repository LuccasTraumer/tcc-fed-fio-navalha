import { InputDataComponent } from './../utils/input-data/input-data.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroCodigoConfirmacaoComponent } from './cadastro-codigo-confirmacao/cadastro-codigo-confirmacao.component';
import { CadastroTipoContaComponent } from './cadastro-tipo-conta/cadastro-tipo-conta.component';
import { CadastroEmailCelularComponent } from './cadastro-email-celular/cadastro-email-celular.component';
import { ButtonComponent } from '../utils/button/button.component';
import { UtilsModule } from '../utils/utils.module';
import { CadastroNomeSenhaComponent } from './cadastro-nome-senha/cadastro-nome-senha.component';


@NgModule({
  declarations: [
    CadastroEmailCelularComponent,
    CadastroCodigoConfirmacaoComponent,
    CadastroTipoContaComponent,
    CadastroNomeSenhaComponent,
    CadastroNomeSenhaComponent
  ],
  imports: [
    CommonModule,
    UtilsModule
  ],
  exports: [
    CadastroEmailCelularComponent,
    CadastroCodigoConfirmacaoComponent,
    CadastroTipoContaComponent,
    CadastroNomeSenhaComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CadastroUsuarioModule { }
