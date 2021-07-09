import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDadosBarbeariaComponent } from './cadastro-dados-barbearia.component';
import { EnderecoService } from '../../../services/cadastro-module/endereco.service';

describe('CadastroDadosBarbeariaComponent', () => {
  let component: CadastroDadosBarbeariaComponent;
  let fixture: ComponentFixture<CadastroDadosBarbeariaComponent>;
  let service: EnderecoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDadosBarbeariaComponent ],
      providers: [ EnderecoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDadosBarbeariaComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(EnderecoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
