import { EnderecoService } from './cadastro-usuario/services/endereco.service/endereco.service';
import { CadastroUsuarioModule } from './cadastro-usuario/cadastro-usuario.module';
import { CadastroCodigoConfirmacaoComponent } from './cadastro-usuario/cadastro-codigo-confirmacao/cadastro-codigo-confirmacao.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { LoadingModule } from './loading/loading.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginModule } from './login/login.module';
import { UtilsModule } from './utils/utils.module';
import { ComponentesModule } from './componentes/componentes.module';
import { EsqueceuSenhaModule } from './esqueceu-senha/esqueceu-senha.module';
import { PaginaPrincipalModule } from './pagina-principal/pagina-principal.module';
import { CadastroDadosBarbeariaComponent } from './cadastro-usuario/cadastro-dados-barbearia/cadastro-dados-barbearia.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    UtilsModule,
    ComponentesModule,
    EsqueceuSenhaModule,
    PaginaPrincipalModule,
    LoadingModule,
    HttpClientModule,
    CadastroUsuarioModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [EnderecoService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
