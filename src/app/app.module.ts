<<<<<<< HEAD
import { LoadingModule } from './loading/loading.module';
=======
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
>>>>>>> release/esteira
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
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
