import { TestBed } from '@angular/core/testing';

import { BuscarDadosClienteService } from './buscar-dados-cliente.service';

describe('BuscarDadosClienteService', () => {
  let service: BuscarDadosClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarDadosClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
