import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBarbeariaComponent } from './home-barbearia.component';

describe('HomeBarbeariaComponent', () => {
  let component: HomeBarbeariaComponent;
  let fixture: ComponentFixture<HomeBarbeariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBarbeariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBarbeariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
