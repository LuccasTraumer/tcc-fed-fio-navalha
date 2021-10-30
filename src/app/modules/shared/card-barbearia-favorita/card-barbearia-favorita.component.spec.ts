/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardBarbeariaFavoritaComponent } from './card-barbearia-favorita.component';

describe('CardBarbeariaFavoritaComponent', () => {
  let component: CardBarbeariaFavoritaComponent;
  let fixture: ComponentFixture<CardBarbeariaFavoritaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBarbeariaFavoritaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBarbeariaFavoritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
