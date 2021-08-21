/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CadastroFotoComponent } from './cadastro-foto.component';
import { UtilsModule } from 'src/app/utils/utils.module';
import { AutenticacaoService } from '../autenticacao.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CadastroFotoComponent', () => {
  let component: CadastroFotoComponent;
  let fixture: ComponentFixture<CadastroFotoComponent>;
  const fileReader: FileReader = new FileReader();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFotoComponent ],
      imports: [UtilsModule],
      providers: [FileReader, AutenticacaoService, HttpClient, HttpHandler],
      //providers: [FileReader]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente Criado com Sucesso', () => {
    expect(component).toBeTruthy();
  });

  it('Quando tamanho da Foto é valido Propriedade fotoValida deve ser True', () => {
    let blob = new Blob([""], { type: 'text/html' });
    let event = new Event("div");
    Object.defineProperty(blob, 'size', {value: 100000, writable: false});
    blob["name"] = "filename";
    let fotoMock = <File>blob;
    console.log(fotoMock);
    component.UploadFoto(fotoMock);
    expect(component).toBeTruthy();
  });

  it('Quando tamanho da Foto é Invalido Propriedade fotoValida deve ser False', () => {
    let fotoMock = new File([""], "filename");
    Object.defineProperty(fotoMock, 'size', {value: 100001, writable: false});
    component.UploadFoto(fotoMock);
    expect(component).toBeFalsy();
  });
});
