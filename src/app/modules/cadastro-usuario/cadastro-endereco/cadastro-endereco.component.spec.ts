import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoService } from 'src/app/modules/cadastro-usuario/services/endereco.service';
import { UtilsModule } from 'src/app/utils/utils.module';
import { CadastroEnderecoComponent } from './cadastro-endereco.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CadastroEnderecoComponent', () => {
  let component: CadastroEnderecoComponent;
  let fixture: ComponentFixture<CadastroEnderecoComponent>;


  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [ CadastroEnderecoComponent ],
      imports: [UtilsModule],
      providers: [EnderecoService, HttpClient, HttpHandler]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('Componente Criado Com Sucesso', async() => {
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
        expect(component).toBeTruthy();
    });
  });

  it('Quando Cep invalido propriedade cepValido deve ser false', () =>{
        component.cep = "1234567";
        component.validaCep("1234567");
        expect(component.cepValido).toBeFalse();
  });

  it('Quando Cep valido propriedade cepValido deve ser true', () => {
    component.cep = "12345678";
    component.validaCep("12345678");
    expect(component.cepValido).toBeTrue();
});

it('Quando Numero for nulo propriedade numeroValido deve ser false', () => {
  expect(component.numeroValido).toBeFalse();
});

it('Quando Numero valido propriedade numeroValido deve ser true', () => {
component.numero = 123;
component.validaNumero(123);
expect(component.numeroValido).toBeTrue();
});



});
