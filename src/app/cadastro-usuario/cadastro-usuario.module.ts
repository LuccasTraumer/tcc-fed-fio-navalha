import { InputDataComponent } from './../utils/input-data/input-data.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroCodigoConfirmacaoComponent } from './cadastro-codigo-confirmacao/cadastro-codigo-confirmacao.component';
import { CadastroTipoContaComponent } from './cadastro-tipo-conta/cadastro-tipo-conta.component';
import { CadastroEmailCelularComponent } from './cadastro-email-celular/cadastro-email-celular.component';
import { ButtonComponent } from '../utils/button/button.component';
import { UtilsModule } from '../utils/utils.module';


@NgModule({
  declarations: [
    CadastroEmailCelularComponent,
    CadastroCodigoConfirmacaoComponent,
    CadastroTipoContaComponent,
  ],
  imports: [
    CommonModule,
    UtilsModule
  ],
  exports: [
    CadastroEmailCelularComponent,
    CadastroCodigoConfirmacaoComponent,
    CadastroTipoContaComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CadastroUsuarioModule { }
