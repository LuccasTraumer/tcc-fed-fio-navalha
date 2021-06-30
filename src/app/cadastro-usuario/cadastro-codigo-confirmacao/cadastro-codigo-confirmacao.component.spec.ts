import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCodigoConfirmacaoComponent } from './cadastro-codigo-confirmacao.component';

describe('CadastroCodigoConfirmacaoComponent', () => {
  let component: CadastroCodigoConfirmacaoComponent;
  let fixture: ComponentFixture<CadastroCodigoConfirmacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCodigoConfirmacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCodigoConfirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
