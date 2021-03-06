import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CadastroCodigoConfirmacaoComponent } from './cadastro-codigo-confirmacao/cadastro-codigo-confirmacao.component';
import { CadastroTipoContaComponent } from './cadastro-tipo-conta/cadastro-tipo-conta.component';
import { CadastroEmailCelularComponent } from './cadastro-email-celular/cadastro-email-celular.component';
import { CadastroNomeSenhaComponent } from './cadastro-nome-senha/cadastro-nome-senha.component';
import { CadastroDataNascimentoComponent } from './cadastro-data-nascimento/cadastro-data-nascimento.component';
import { CadastroRoutingModule } from './cadastro.routing.module';
import { CadastroServiceService } from './services/cadastro-service.service';
import { EnderecoService } from './services/endereco.service';
import { FormsModule } from '@angular/forms';
import { CadastroFotoComponent } from './cadastro-foto/cadastro-foto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
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
    CadastroComponent,
    CadastroFotoComponent,
    CadastroEnderecoComponent,
    CadastroCpfCnpjComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CadastroRoutingModule,
    SharedModule,
  ],
  exports: [],
  providers: [CadastroServiceService, EnderecoService, FileReader],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CadastroUsuarioModule { }
