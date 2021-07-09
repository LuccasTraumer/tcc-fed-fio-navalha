import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroServiceService } from 'src/app/services/cadastro-module/cadastro-service.service';

import { CadastroDataNascimentoComponent } from './cadastro-data-nascimento.component';

describe('CadastroDataNascimentoComponent', () => {
  let component: CadastroDataNascimentoComponent;
  let fixture: ComponentFixture<CadastroDataNascimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDataNascimentoComponent ],
      providers: [ CadastroServiceService ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDataNascimentoComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('quando data valida deve retornar true', () => {
    component.setDia(5);
    component.setMes(7);
    component.setAno(2021);

    component.valida();
    expect(component.valida()).toBeTruthy();
  });

  it('quando dia invalida deve retornar false', () => {
    component.setDia(50);
    component.setMes(7);
    component.setAno(2021);

    component.valida();
    expect(component.valida()).toBeFalsy();
  });

  it('quando data invalida deve retornar false', () => {
    component.setDia(50);
    component.setMes(70);
    component.setAno(20291);

    component.valida();
    expect(component.valida()).toBeFalsy();
  });
});
