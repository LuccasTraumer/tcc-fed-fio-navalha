import { ComponentesModule } from './../componentes/componentes.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CadastroCodigoConfirmacaoComponent } from './cadastro-codigo-confirmacao/cadastro-codigo-confirmacao.component';
import { CadastroTipoContaComponent } from './cadastro-tipo-conta/cadastro-tipo-conta.component';
import { CadastroEmailCelularComponent } from './cadastro-email-celular/cadastro-email-celular.component';
import { UtilsModule } from '../../utils/utils.module';
import { CadastroNomeSenhaComponent } from './cadastro-nome-senha/cadastro-nome-senha.component';
import { CadastroDataNascimentoComponent } from './cadastro-data-nascimento/cadastro-data-nascimento.component';
import { CadastroRoutingModule } from './cadastro.routing.module';
import { CadastroServiceService } from '../../services/cadastro-module/cadastro-service.service';
import { EnderecoService } from '../../services/cadastro-module/endereco.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroFotoComponent } from './cadastro-foto/cadastro-foto.component';
import { CadastroEnderecoComponent } from './cadastro-endereco/cadastro-endereco.component';
import { CadastroCpfCnpjComponent } from './cadastro-cpf-cnpj/cadastro-cpf-cnpj.component';

@NgModule({
  declarations: [
    CadastroEmailCelularComponent,
    CadastroCodigoConfirmacaoComponent,
    CadastroTipoContaComponent,
    CadastroNomeSenhaComponent,
    CadastroDataNascimentoComponent,
    CadastroFotoComponent,
    CadastroEnderecoComponent,
    CadastroCpfCnpjComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    HttpClientModule,
    CadastroRoutingModule,
    ComponentesModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [CadastroServiceService, EnderecoService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CadastroUsuarioModule { }
