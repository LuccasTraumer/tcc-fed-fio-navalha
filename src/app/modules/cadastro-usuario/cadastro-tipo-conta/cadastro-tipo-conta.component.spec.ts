import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CadastroTipoContaComponent } from './cadastro-tipo-conta.component';

describe('CadastroTipoContaComponent', () => {
  let component: CadastroTipoContaComponent;
  let fixture: ComponentFixture<CadastroTipoContaComponent>;
  const formBuilder: FormBuilder = new FormBuilder ();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroTipoContaComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [{fornecer: FormBuilder, useValue: formBuilder}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTipoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente Criado com Sucesso', () => {
    expect(component).toBeTruthy();
  });

  it('Quando nenhuma conta está selecionada isTipoContaValido deve ser false', () => {
    expect(component.isTipoContaValido).toBeFalsy();
  });

  it('Quando conta tipo clienteVarejo for selecionada isTipoContaValido deve ser true', () => {
    component.escolherConta(0);
    expect(component.isTipoContaValido).toBeTruthy();
  });

  it('Quando conta tipo clienteBarbearia for selecionada isTipoContaValido deve ser true', () => {
    component.escolherConta(1);
    expect(component.isTipoContaValido).toBeTruthy();
  });




});
