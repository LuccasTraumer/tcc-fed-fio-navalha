/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DadosCardService } from './dados-card.service';

describe('Service: DadosCard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadosCardService]
    });
  });

  it('should ...', inject([DadosCardService], (service: DadosCardService) => {
    expect(service).toBeTruthy();
  }));
});
