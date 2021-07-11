import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CadastroCodigoConfirmacaoComponent } from './cadastro-codigo-confirmacao/cadastro-codigo-confirmacao.component';
import { CadastroTipoContaComponent } from './cadastro-tipo-conta/cadastro-tipo-conta.component';
import { CadastroEmailCelularComponent } from './cadastro-email-celular/cadastro-email-celular.component';
import { UtilsModule } from '../../utils/utils.module';
import { CadastroNomeSenhaComponent } from './cadastro-nome-senha/cadastro-nome-senha.component';
import { CadastroDataNascimentoComponent } from './cadastro-data-nascimento/cadastro-data-nascimento.component';
import { CadastroDadosBarbeariaComponent } from './cadastro-dados-barbearia/cadastro-dados-barbearia.component';
import { CadastroRoutingModule } from './cadastro.routing.module';
import { CadastroServiceService } from '../../services/cadastro-module/cadastro-service.service';
import { EnderecoService } from '../../services/cadastro-module/endereco.service';
import { CadastroDadosClienteComponent } from './cadastro-dados-cliente/cadastro-dados-cliente.component';
import { CadastroCpfComponent } from './cadastro-cpf/cadastro-cpf.component';
import { CadastroCnpjComponent } from './cadastro-cnpj/cadastro-cnpj.component';
import { CadastroFotoComponent } from './cadastro-foto/cadastro-foto.component';

@NgModule({
  declarations: [
    CadastroEmailCelularComponent,
    CadastroCodigoConfirmacaoComponent,
    CadastroTipoContaComponent,
    CadastroNomeSenhaComponent,
    CadastroDataNascimentoComponent,
    CadastroDadosBarbeariaComponent,
    CadastroDadosClienteComponent,
    CadastroCpfComponent,
    CadastroCnpjComponent,
    CadastroFotoComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    HttpClientModule,
    CadastroRoutingModule
  ],
  exports: [
    CadastroEmailCelularComponent,
    CadastroCodigoConfirmacaoComponent,
    CadastroTipoContaComponent,
    CadastroNomeSenhaComponent,
    CadastroDataNascimentoComponent,
    CadastroDadosBarbeariaComponent,
    CadastroDadosClienteComponent,
    CadastroCpfComponent,
    CadastroCnpjComponent,
    CadastroFotoComponent
  ],
  providers: [CadastroServiceService, EnderecoService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CadastroUsuarioModule { }
