import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EnderecoService } from './endereco.service';
import { Endereco } from '../../../models/endereco';
import { of } from 'rxjs';

describe('EnderecoService', () => {
  let service: EnderecoService;
  let httpClientMock: HttpClient;
  const enderecoMock: Endereco = new Endereco();


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = new EnderecoService(httpClientMock);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('quando buscar cep deve retornar sucesso', () => {
  //   spyOn(httpClientMock, 'get').and.returnValue(of(enderecoMock));
  //   expect(service.getEndereco('')).toBe(of(enderecoMock));
  // });
});
