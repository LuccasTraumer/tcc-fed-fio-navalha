import { TestBed } from '@angular/core/testing';

import { BarbeariaService } from './barbearia.service';

describe('HomeClienteService', () => {
  let service: BarbeariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarbeariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
