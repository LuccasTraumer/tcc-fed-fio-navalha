import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDadosClienteComponent } from './cadastro-dados-cliente.component';

describe('CadastroDadosClienteComponent', () => {
  let component: CadastroDadosClienteComponent;
  let fixture: ComponentFixture<CadastroDadosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDadosClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDadosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
