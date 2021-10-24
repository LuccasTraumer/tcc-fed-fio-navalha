import { TestBed } from '@angular/core/testing';

import { CadastroServiceService } from './cadastro-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

describe('CadastroServiceService', () => {
  let service: CadastroServiceService;
  let httpClientMock: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
      providers: [HttpClient]
    });
    service = new CadastroServiceService(httpClientMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
