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
