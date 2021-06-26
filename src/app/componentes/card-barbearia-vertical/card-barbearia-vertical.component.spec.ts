import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBarbeariaVerticalComponent } from './card-barbearia-vertical.component';

describe('CardBarbeariaVerticalComponent', () => {
  let component: CardBarbeariaVerticalComponent;
  let fixture: ComponentFixture<CardBarbeariaVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBarbeariaVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBarbeariaVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
