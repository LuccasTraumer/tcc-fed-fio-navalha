import { ComponentFixture, TestBed } from '@angular/core/testing'; //Sintaxe Jest
import { RouterTestingModule } from '@angular/router/testing';
import { CadastroCpfCnpjComponent } from './cadastro-cpf-cnpj.component';

describe('CadastroCpfCnpjComponent', () => {
  let component: CadastroCpfCnpjComponent;
  let fixture: ComponentFixture<CadastroCpfCnpjComponent>;


  beforeEach(async () => {
    sessionStorage.setItem('cliente', JSON.stringify('Barbearia'));
    await TestBed.configureTestingModule({
      declarations: [ CadastroCpfCnpjComponent  ],
      imports: [RouterTestingModule],
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
