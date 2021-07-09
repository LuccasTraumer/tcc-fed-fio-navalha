import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNomeSenhaComponent } from './cadastro-nome-senha.component';

describe('CadastroNomeSenhaComponent', () => {
  let component: CadastroNomeSenhaComponent;
  let fixture: ComponentFixture<CadastroNomeSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroNomeSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNomeSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
