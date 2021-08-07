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

  public icone_upload = ConstantesIcons.ICONE_UPLOAD_FOTO_PERFIL;
  public icone_camera = ConstantesIcons.ICONE_CAMERA_UPLOAD_FOTO_PERFIL;

  constructor(private autenticacaoService: AutenticacaoService, private http: HttpClient) { }

  onSubmit() {
    this.autenticacaoService.cadastrarUsuario(this.cliente);
  }
}
