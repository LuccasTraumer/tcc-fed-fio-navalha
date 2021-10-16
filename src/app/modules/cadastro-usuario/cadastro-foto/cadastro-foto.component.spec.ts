/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CadastroFotoComponent } from './cadastro-foto.component';
import { UtilsModule } from 'src/app/utils/utils.module';
import { AutenticacaoService } from '../services/autenticacao.service';
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
    const mockFile = new File ([''], 'filename', {type: 'image / png'});
    Object.defineProperty(mockFile, 'size', {value: 100000, writable: false});
    const mockEvt = {target: {files: [mockFile]}};
    component.UploadFoto(mockEvt);
    expect(component.fotoValida).toBeTrue();
  });

  it('Quando tamanho da Foto é Invalido Propriedade fotoValida deve ser False', () => {
    const mockFile = new File ([''], 'filename', {type: 'image / png'});
    Object.defineProperty(mockFile, 'size', {value: 100001, writable: false});
    const mockEvt = {target: {files: [mockFile]}};
    component.UploadFoto(mockEvt);
    expect(component.fotoValida).toBeFalse();
  });
});
