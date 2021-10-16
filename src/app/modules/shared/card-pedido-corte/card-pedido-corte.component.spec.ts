import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPedidoCorteComponent } from './card-pedido-corte.component';

describe('CardPedidoCorteComponent', () => {
  let component: CardPedidoCorteComponent;
  let fixture: ComponentFixture<CardPedidoCorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPedidoCorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPedidoCorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
