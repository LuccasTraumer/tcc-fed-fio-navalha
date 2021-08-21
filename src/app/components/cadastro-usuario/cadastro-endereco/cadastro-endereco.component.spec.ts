import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsModule } from 'src/app/utils/utils.module';
import { CadastroEnderecoComponent } from './cadastro-endereco.component';

describe('CadastroEnderecoComponent', () => {
  let component: CadastroEnderecoComponent;
  let fixture: ComponentFixture<CadastroEnderecoComponent>;
  let FormBuilder: FormBuilder;
  let router: Router;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [ CadastroEnderecoComponent ],
      imports: [UtilsModule],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('should create', async() => {
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
        expect(component).toBeTruthy();
    });
  });


});
