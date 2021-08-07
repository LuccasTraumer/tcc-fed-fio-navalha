
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UtilsModule } from 'src/app/utils/utils.module';
import { CadastroCodigoConfirmacaoComponent } from './cadastro-codigo-confirmacao.component';

fdescribe('CadastroCodigoConfirmacaoComponent', () => {
  let component: CadastroCodigoConfirmacaoComponent;
  let fixture: ComponentFixture<CadastroCodigoConfirmacaoComponent>;
  let forms: FormBuilder;
  let router: Router;
  const formBuilder: FormBuilder = new FormBuilder ();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCodigoConfirmacaoComponent ],
      imports: [ReactiveFormsModule, UtilsModule, RouterTestingModule],
      providers: [{fornecer: FormBuilder, useValue: formBuilder}],
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

/*

//import {} from 'jasmine';
import { ComponentFixture, TestBed, async } from '@angular/core/testing'; //Sintaxe Jest
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from 'src/app/utils/utils.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CadastroCpfCnpjComponent } from './cadastro-cpf-cnpj.component';
import { Router } from '@angular/router';

describe('CadastroCpfCnpjComponent', () => {
  let component: CadastroCpfCnpjComponent;
  let fixture: ComponentFixture<CadastroCpfCnpjComponent>;
  let forms: FormBuilder;
  let router: Router;
  const formBuilder: FormBuilder = new FormBuilder ();

  beforeEach(async () => {
    sessionStorage.setItem('cliente', JSON.stringify('clienteBarbearia'));
    await TestBed.configureTestingModule({
      declarations: [ CadastroCpfCnpjComponent,  ],
      imports: [ReactiveFormsModule, UtilsModule, RouterTestingModule],
      providers: [{fornecer: FormBuilder, useValue: formBuilder}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCpfCnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async() => {
    fixture.detectChanges();
   await fixture.whenStable().then(() => {
        expect(component).toBeTruthy();
    });
});
});

*/
