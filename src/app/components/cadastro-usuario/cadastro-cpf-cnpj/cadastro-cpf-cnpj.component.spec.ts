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


  beforeEach(async () => {
    sessionStorage.setItem('cliente', JSON.stringify('Barbearia'));
    await TestBed.configureTestingModule({
      declarations: [ CadastroCpfCnpjComponent  ],
      imports: [UtilsModule, RouterTestingModule],
      providers: [],
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

  it('Quando CPF invalido isDocumentoValido deve ser falso', async() => {
        component.textoTipoCadastro = 'CPF';
        component.validaInput('38036385000')
        expect(component.isDocumentoValido).toBeFalsy();
  });

  it('Quando CPF valido isDocumentoValido deve ser true', async() => {
      component.textoTipoCadastro = 'CPF';
      component.validaInput('38036385007')
      expect(component.isDocumentoValido).toBeTruthy();
});

});
