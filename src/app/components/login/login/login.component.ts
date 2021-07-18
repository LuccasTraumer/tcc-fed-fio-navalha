import { Component } from '@angular/core';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../cadastro-usuario/autenticacao.service';

@Component({
  selector: 'fdn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formulario;
  public pathImage = ConstantesIcons.LOGO_ICON_PNG;
  public background: string = "../../../assets/images/barber-image-pentes.jpg";

  constructor(private formBuilder: FormBuilder, private router: Router, private autenticacaoService: AutenticacaoService) {
    this.formulario = this.formBuilder.group({
      email: '',
      senha: ''
    });
  }

  onSubmit(): void{
    console.log(this.formulario.value);
  }

  cadastrarConta(): void {
    this.router.navigate(['/cadastro']);
  }

  esqueceuSenha(): void {
    this.router.navigate(['/esqueceu-senha']);
  }
}
