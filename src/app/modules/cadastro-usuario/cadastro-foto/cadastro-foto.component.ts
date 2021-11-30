import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Usuario } from 'src/app/models/Usuario';
import { ConstantesIcons } from '../../../utils/constantes.icons';

@Component({
  selector: 'fdn-cadastro-foto',
  templateUrl: './cadastro-foto.component.html',
  styleUrls: ['./cadastro-foto.component.scss']
})
export class CadastroFotoComponent {
  @Input()
  public cliente: Usuario;

  public foto: any;
  public fotoBase64: any;
  public fotoValida: boolean = true;
  public valido = true;
  public tamanhoFotoPermitido: number = 300000;
  public icone_upload = ConstantesIcons.ICONE_UPLOAD_FOTO_PERFIL;
  public icone_camera = ConstantesIcons.ICONE_CAMERA_UPLOAD_FOTO_PERFIL;

  @Output()
  enviarDados = new EventEmitter<Usuario>();

  constructor(private fileReader: FileReader) {
    this.fotoValida = true;
    this.fotoBase64 = this.icone_upload;
  }

  async UploadFoto(file: any) {
    if (file.target?.files && file.target?.files[0]) {

      let possivelFoto = file.target.files[0];
      let tamanhoFoto = possivelFoto.size;

      this.foto = this.isTamanhoFotoValido(tamanhoFoto) ? possivelFoto : null;

      if (!this.foto) {
        this.fotoValida = false;
        this.foto = this.icone_upload;
        this.fotoBase64 = this.icone_upload;
        return;
      }

      await this.getBase64(this.foto).then(
        data => {
          this.fotoBase64 = data;
        }
      );

      this.fotoValida = true;
      this.fileReader.onloadend = () => { this.foto = this.fileReader.result };
      this.cliente.fotoPerfil = this.fotoBase64;
    }
  }

  //This is my function for get base64, but not return the string base64
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      return Promise.resolve(reader.result)
    });
  }

  private isTamanhoFotoValido(tamanho: number): boolean {
    if (tamanho > this.tamanhoFotoPermitido)
      return false;

    return true;
  }

  onSubmit() {
    this.enviarDados.emit(this.cliente);
  }
}
