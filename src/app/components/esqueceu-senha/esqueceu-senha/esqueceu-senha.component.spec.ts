import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UtilsModule } from 'src/app/utils/utils.module';

import { EsqueceuSenhaComponent } from './esqueceu-senha.component';

describe('EsqueceuSenhaComponent', () => {
  let component: EsqueceuSenhaComponent;
  let fixture: ComponentFixture<EsqueceuSenhaComponent>;
  const formBuilder: FormBuilder = new FormBuilder ();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsqueceuSenhaComponent ],
      imports: [ReactiveFormsModule, UtilsModule, RouterTestingModule],
      providers: [{fornecer: FormBuilder, useValue: formBuilder}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsqueceuSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
