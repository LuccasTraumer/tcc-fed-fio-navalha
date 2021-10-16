
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CadastroCodigoConfirmacaoComponent } from './cadastro-codigo-confirmacao.component';

describe('CadastroCodigoConfirmacaoComponent', () => {
  let component: CadastroCodigoConfirmacaoComponent;
  let fixture: ComponentFixture<CadastroCodigoConfirmacaoComponent>;
  let forms: FormBuilder;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCodigoConfirmacaoComponent ],
      imports: [RouterTestingModule],
      providers: []
  })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCodigoConfirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente Criado', () => {
    expect(component).toBeTruthy();
  });

  it('Quando Código de confirmação é invalido, isCodigoValido deve ser false', () =>{
    component.validadorCodigo('1234567');
    expect(component.isCodigoValido == false);
  });

  it('Quando Código de confirmação é valido, isCodigoValido deve ser true', () =>{
    component.validadorCodigo('12345678');
    expect(component.isCodigoValido == true);
  });
});

