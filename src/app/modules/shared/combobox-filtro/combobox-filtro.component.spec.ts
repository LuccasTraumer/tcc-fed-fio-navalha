import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxFiltroComponent } from './combobox-filtro.component';

describe('ComboboxFiltroComponent', () => {
  let component: ComboboxFiltroComponent;
  let fixture: ComponentFixture<ComboboxFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboboxFiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboboxFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
