import { LoadingModule } from './loading/loading.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginModule } from './login/login.module';
import { UtilsModule } from './utils/utils.module';
import { ComponentesModule } from './componentes/componentes.module';
import { EsqueceuSenhaModule } from './esqueceu-senha/esqueceu-senha.module';
import { PaginaPrincipalModule } from './pagina-principal/pagina-principal.module';
import { ButtonComponent } from './utils/button/button.component';
import { InputDataComponent } from './utils/input-data/input-data.component';



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
  bootstrap: [AppComponent]
})
export class AppModule { }
