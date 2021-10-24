import { TestBed } from '@angular/core/testing';

import { AutenticacaoService } from './autenticacao.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AutenticacaoService', () => {
  let service: AutenticacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [],
      providers: [HttpClient, HttpHandler]
    })
    service = TestBed.inject(AutenticacaoService);
  });

  it('Serviço Criado com Sucesso', () => {
    expect(service).toBeTruthy();
  });
});
