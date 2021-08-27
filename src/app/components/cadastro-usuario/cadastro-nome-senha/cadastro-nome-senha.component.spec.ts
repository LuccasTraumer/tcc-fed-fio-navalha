import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilsModule } from 'src/app/utils/utils.module';

import { CadastroNomeSenhaComponent } from './cadastro-nome-senha.component';

describe('CadastroNomeSenhaComponent', () => {
  let component: CadastroNomeSenhaComponent;
  let fixture: ComponentFixture<CadastroNomeSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroNomeSenhaComponent ],
      imports: [UtilsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNomeSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente Criado Com Sucesso', () => {
    expect(component).toBeTruthy();
  });

  it('Quando Senha for menor que 8 caracteres senhaValida deve ser false', () => {
    component.validarSenha('1234567');
    expect(component.senhaValida).toBeFalsy();
  });

  it('Quando Senha for maior/igual a 8 caracteres mensagem de erro deve informar sobre confirmar senha', () => {
    component.validarSenha('12345678');
    expect(component.mensagemErro).toEqual('Senha de confirmação diferente da senha inserida');
  });

  it('Quando Senha e Confirmar senha forem Validos e não houver um nome senhaValida deve ser False', () => {
    component.nome = '';
    component.senha = '12345678';
    component.validarSenhaConfirmacao('12345678');
    expect(component.senhaValida).toBeFalsy();
  });

  it('Quando Senha e Confirmar senha forem Validos e houver um nome senhaValida deve ser True', () => {
    component.nome = 'Pedro';
    component.senha = '12345678';
    component.validarSenhaConfirmacao('12345678');
    expect(component.senhaValida).toBeTruthy();
  });
});
