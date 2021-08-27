import { getTestBed, TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AutenticacaoService } from '../components/cadastro-usuario/autenticacao.service';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuardService', () => {
  let service: AuthGuard;
  let routerMock: Router;
  let mockHttp: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, HttpClientTestingModule, RouterTestingModule],
      providers:
      [
        { provide: AutenticacaoService,
          useValue: { usuarioEstaAutenticado: () => true }
        }
      ]
    });
    injector = getTestBed();
    service = injector.inject(AuthGuard);
    mockHttp = injector.inject(HttpTestingController);
  });

  it('Componente Criado com Sucesso', () => {
    expect(service).toBeTruthy();
  });

});
