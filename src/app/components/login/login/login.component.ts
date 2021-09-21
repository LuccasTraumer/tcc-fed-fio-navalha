import { Component } from '@angular/core';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../cadastro-usuario/autenticacao.service';
import { Usuario } from '../../../models/Usuario';

@Component({
  selector: 'fdn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formulario = new Usuario();
  public pathImage = ConstantesIcons.LOGO_ICON_PNG;
  public background: string = "../../../assets/images/barber-image-pentes.jpg";

  constructor(
    //private formBuilder: FormBuilder,
    private router: Router,
    //private autenticacaoService: AutenticacaoService
    )
    {
    // this.formulario = {
    //   email: '',
    //   senha: ''
    // };
  }

  onSubmita(): void{
    console.log(this.formulario);
    //if(this.formulario.email == 'admin' && this.formulario.senha == '123') {
      this.router.navigate(['/home-barbearia']);
    //}
  }

  cadastrarConta(): void {
    this.router.navigate(['/cadastro']);
  }

  esqueceuSenha(): void {
    this.router.navigate(['/esqueceu-senha']);
  }
}
