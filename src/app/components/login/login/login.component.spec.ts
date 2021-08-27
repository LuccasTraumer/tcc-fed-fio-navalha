import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UtilsModule } from 'src/app/utils/utils.module';

import { LoginComponent } from './login.component';
import { AutenticacaoService } from './../../cadastro-usuario/autenticacao.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AuthGuard } from 'src/app/guardas/auth.guard';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let service: AuthGuard;
  let routerMock: Router;
  let mockHttp: HttpTestingController;
  let injector: TestBed;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, BrowserModule, HttpClientTestingModule, RouterTestingModule],
      providers: [
        {fornecer: FormBuilder, useValue: formBuilder},
        { provide: AutenticacaoService,
          useValue: { usuarioEstaAutenticado: () => false }
        }
      ]
    })
    .compileComponents();
    //injector = getTestBed();
   // service = injector.inject();
   // mockHttp = injector.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
