import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroCodigoConfirmacaoComponent } from './cadastro-codigo-confirmacao/cadastro-codigo-confirmacao.component';
import { CadastroTipoContaComponent } from './cadastro-tipo-conta/cadastro-tipo-conta.component';
import { CadastroEmailCelularComponent } from './cadastro-email-celular/cadastro-email-celular.component';
import { ButtonComponent } from '../utils/button/button.component';
import { UtilsModule } from '../utils/utils.module';
import { CadastroNomeSenhaComponent } from './cadastro-nome-senha/cadastro-nome-senha.component';
import { CadastroDataNascimentoComponent } from './cadastro-data-nascimento/cadastro-data-nascimento.component';
import { CadastroDadosBarbeariaComponent } from './cadastro-dados-barbearia/cadastro-dados-barbearia.component';


@NgModule({
  declarations: [
    CadastroEmailCelularComponent,
    CadastroCodigoConfirmacaoComponent,
    CadastroTipoContaComponent,
    CadastroNomeSenhaComponent,
    CadastroDataNascimentoComponent,
    CadastroDadosBarbeariaComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    HttpClientModule
  ],
  exports: [
    CadastroEmailCelularComponent,
    CadastroCodigoConfirmacaoComponent,
    CadastroTipoContaComponent,
    CadastroNomeSenhaComponent,
    CadastroDataNascimentoComponent,
    CadastroDadosBarbeariaComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CadastroUsuarioModule { }