import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDataNascimentoComponent } from './cadastro-data-nascimento.component';

describe('CadastroDataNascimentoComponent', () => {
  let component: CadastroDataNascimentoComponent;
  let fixture: ComponentFixture<CadastroDataNascimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDataNascimentoComponent ]
    })
    .compileComponents();
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
    component.getDia(5);
    component.getMes(7);
    component.getAno(2021);

    component.valida();
    expect(component.valida()).toBeTruthy();
  });

  it('quando dia invalida deve retornar false', () => {
    component.getDia(50);
    component.getMes(7);
    component.getAno(2021);

    component.valida();
    expect(component.valida()).toBeFalsy();
  });

  it('quando data invalida deve retornar false', () => {
    component.getDia(50);
    component.getMes(70);
    component.getAno(20291);

    component.valida();
    expect(component.valida()).toBeFalsy();
  });
});
