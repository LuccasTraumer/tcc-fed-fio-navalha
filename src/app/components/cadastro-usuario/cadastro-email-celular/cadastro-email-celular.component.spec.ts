import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmailCelularComponent } from './cadastro-email-celular.component';

describe('CadastroEmailCelularComponent', () => {
  let component: CadastroEmailCelularComponent;
  let fixture: ComponentFixture<CadastroEmailCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEmailCelularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEmailCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
