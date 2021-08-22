import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmailCelularComponent } from './cadastro-email-celular.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsModule } from 'src/app/utils/utils.module';

describe('CadastroEmailCelularComponent', () => {
  let component: CadastroEmailCelularComponent;
  let fixture: ComponentFixture<CadastroEmailCelularComponent>;
  let FormBuilder: FormBuilder;
  let router: Router;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [ CadastroEmailCelularComponent ],
      imports: [UtilsModule],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEmailCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('should create', async() => {
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
        expect(component).toBeTruthy();
    });
  });

  it('quando Telefone for valido propriedade isValido deve ser True', () => {
    component.pegarInput('19981117162');
    expect(component.isValido).toBeTrue();
  });

  it('quando Telefone for invalido propriedade isValido deve ser False', () => {
    component.pegarInput('1998111');
    expect(component.isValido).toBeFalse();
  });

  it('quando Telefone for maior que o permitido sera considerado somente o 11 caracteres e propriedade isValido deve ser True', () => {
    component.pegarInput('199811171626262');
    expect(component.isValido).toBeTrue();
  });

  it('quando Email for valido propriedade isValido deve ser True', () => {
    component.pegarInput('emailvalido123@gmail.com');
    expect(component.isValido).toBeTrue();
  });

  it('quando Email for valido propriedade isValido deve ser True', () => {
    component.pegarInput('emailvalido123@hotmail.com');
    expect(component.isValido).toBeTrue();
  });

  it('quando Email for invalido propriedade isValido deve ser False', () => {
    component.escolherEmail();
    component.pegarInput('emailinvalido123');
    expect(component.isValido).toBeFalsy();
  });

});
