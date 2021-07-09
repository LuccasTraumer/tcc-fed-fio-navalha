import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBarbeariaHorizontalComponent } from './card-barbearia-horizontal.component';

describe('CardBarbeariaHorizontalComponent', () => {
  let component: CardBarbeariaHorizontalComponent;
  let fixture: ComponentFixture<CardBarbeariaHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBarbeariaHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBarbeariaHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
