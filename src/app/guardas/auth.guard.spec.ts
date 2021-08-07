import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AutenticacaoService } from '../components/cadastro-usuario/autenticacao.service';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('AuthGuardService', () => {
  let service: AuthGuard;
 // let autenticacaoServiceMock: AutenticacaoService = new AutenticacaoService();
  let routerMock: Router;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
      providers: [AutenticacaoService, Router]
    });
   // service = new AuthGuard(autenticacaoServiceMock, routerMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
