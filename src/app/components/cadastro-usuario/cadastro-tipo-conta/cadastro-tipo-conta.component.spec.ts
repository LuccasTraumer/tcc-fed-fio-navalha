import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTipoContaComponent } from './cadastro-tipo-conta.component';

describe('CadastroTipoContaComponent', () => {
  let component: CadastroTipoContaComponent;
  let fixture: ComponentFixture<CadastroTipoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroTipoContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTipoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
