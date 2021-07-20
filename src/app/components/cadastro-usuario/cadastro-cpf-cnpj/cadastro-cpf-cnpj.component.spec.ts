import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCpfCnpjComponent } from './cadastro-cpf-cnpj.component';

describe('CadastroCpfCnpjComponent', () => {
  let component: CadastroCpfCnpjComponent;
  let fixture: ComponentFixture<CadastroCpfCnpjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCpfCnpjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCpfCnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
