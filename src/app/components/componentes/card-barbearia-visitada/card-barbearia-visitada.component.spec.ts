/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardBarbeariaVisitadaComponent } from './card-barbearia-visitada.component';

describe('CardBarbeariaVisitadaComponent', () => {
  let component: CardBarbeariaVisitadaComponent;
  let fixture: ComponentFixture<CardBarbeariaVisitadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBarbeariaVisitadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBarbeariaVisitadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
