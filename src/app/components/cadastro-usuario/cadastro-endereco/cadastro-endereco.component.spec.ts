import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoService } from 'src/app/services/cadastro-module/endereco.service';
import { UtilsModule } from 'src/app/utils/utils.module';
import { CadastroEnderecoComponent } from './cadastro-endereco.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CadastroEnderecoComponent', () => {
  let component: CadastroEnderecoComponent;
  let fixture: ComponentFixture<CadastroEnderecoComponent>;


  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [ CadastroEnderecoComponent ],
      imports: [UtilsModule],
      providers: [EnderecoService, HttpClient, HttpHandler]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('Componente Criado', async() => {
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
        expect(component).toBeTruthy();
    });
  });


});
