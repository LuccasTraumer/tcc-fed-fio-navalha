import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UtilsModule } from 'src/app/utils/utils.module';

import { CadastroTipoContaComponent } from './cadastro-tipo-conta.component';

describe('CadastroTipoContaComponent', () => {
  let component: CadastroTipoContaComponent;
  let fixture: ComponentFixture<CadastroTipoContaComponent>;
  const formBuilder: FormBuilder = new FormBuilder ();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroTipoContaComponent ],
      imports: [ReactiveFormsModule, UtilsModule, RouterTestingModule],
      providers: [{fornecer: FormBuilder, useValue: formBuilder}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTipoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('Componente Criado com Sucesso', () => {
    expect(component).toBeTruthy();
  });

  fit('Quando nenhuma conta está selecionada isTipoContaValido deve ser false', () => {
    expect(component.isTipoContaValido).toBeFalsy();
  });

  fit('Quando conta tipo clienteVarejo for selecionada isTipoContaValido deve ser true', () => {
    component.escolherConta(0);
    expect(component.isTipoContaValido).toBeTruthy();
  });

  fit('Quando conta tipo clienteBarbearia for selecionada isTipoContaValido deve ser true', () => {
    component.escolherConta(1);
    expect(component.isTipoContaValido).toBeTruthy();
  });




});
