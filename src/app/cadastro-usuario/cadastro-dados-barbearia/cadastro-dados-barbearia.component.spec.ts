import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDadosBarbeariaComponent } from './cadastro-dados-barbearia.component';

describe('CadastroDadosBarbeariaComponent', () => {
  let component: CadastroDadosBarbeariaComponent;
  let fixture: ComponentFixture<CadastroDadosBarbeariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDadosBarbeariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDadosBarbeariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
