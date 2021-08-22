import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from 'src/app/models/Cliente';
import { AutenticacaoService } from '../autenticacao.service';
import { ConstantesIcons } from '../../../utils/constantes.icons';

@Component({
  selector: 'fdn-cadastro-foto',
  templateUrl: './cadastro-foto.component.html',
  styleUrls: ['./cadastro-foto.component.scss']
})
export class CadastroFotoComponent {

  @Input()
  public cliente: Cliente;
  public foto: any;
  public fotoValida: boolean = true;
  public valido = true;
  public tamanhoFotoPermitido: number = 100000;
  public icone_upload = ConstantesIcons.ICONE_UPLOAD_FOTO_PERFIL;
  public icone_camera = ConstantesIcons.ICONE_CAMERA_UPLOAD_FOTO_PERFIL;

  constructor(private autenticacaoService: AutenticacaoService, private fileReader: FileReader) {
    this.fotoValida = true;
    console.log(this.fotoValida)
  }

UploadFoto(file: any) {
  console.log(file);
  if(file.target?.files && file.target?.files[0]) {
    let possivelFoto = file.target.files[0];
    let tamanhoFoto = possivelFoto.size;

    this.foto = this.isTamanhoFotoValido(tamanhoFoto)?possivelFoto:null;
    if(!this.foto) {
      this.fotoValida = false;
      this.foto = this.icone_upload;
      return;
    }

    this.fotoValida = true;
    this.fileReader.readAsDataURL(this.foto);
    this.fileReader.onloadend = ()=>{this.foto = this.fileReader.result}
  }

}
private isTamanhoFotoValido(tamanho: number): boolean {
  if(tamanho > this.tamanhoFotoPermitido)
    return false;

  return true;
}

  onSubmit() {
    this.autenticacaoService.cadastrarUsuario(this.cliente);
  }
}
