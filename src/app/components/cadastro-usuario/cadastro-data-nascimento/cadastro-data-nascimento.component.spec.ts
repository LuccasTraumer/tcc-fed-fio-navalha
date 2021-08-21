import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CadastroServiceService } from 'src/app/services/cadastro-module/cadastro-service.service';
import { UtilsModule } from 'src/app/utils/utils.module';

import { CadastroDataNascimentoComponent } from './cadastro-data-nascimento.component';

describe('CadastroDataNascimentoComponent', () => {
  let component: CadastroDataNascimentoComponent;
  let fixture: ComponentFixture<CadastroDataNascimentoComponent>;
  const formBuilder: FormBuilder = new FormBuilder ();
 // const httpClient: HttpClient = new HttpClient ();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDataNascimentoComponent ],
      imports: [ReactiveFormsModule, UtilsModule, RouterTestingModule],
      providers: [{fornecer: FormBuilder, useValue: formBuilder}, HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDataNascimentoComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('quando data valida deve retornar true', () => {
    component.setDia('5');
    component.setMes('7');
    component.setAno('2010');

    component.valida();
    expect(component.valida()).toBeTruthy();
  });

 fit('quando dia invalida deve retornar false', () => {
    component.setDia('50');
    component.setMes('7');
    component.setAno('2021');

    component.valida();
    expect(component.valida()).toBeFalsy();
  });

  fit('quando data invalida deve retornar false', () => {
    component.setDia('50');
    component.setMes('70');
    component.setAno('20291');

    component.valida();
    expect(component.valida()).toBeFalsy();
  });
});
