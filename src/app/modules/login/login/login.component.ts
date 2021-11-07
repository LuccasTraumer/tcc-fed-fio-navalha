import {Component, OnInit} from '@angular/core';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
import { AutenticacaoService } from '../../cadastro-usuario/services/autenticacao.service';
import { Usuario } from '../../../models/Usuario';

@Component({
  selector: 'fdn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formulario: FormGroup;
  public pathImage = ConstantesIcons.LOGO_ICON_PNG;
  public background: string = "../../../assets/images/barber-image-pentes.jpg";

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private autenticacaoService: AutenticacaoService
    )
    {
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required]],
      senha: [null, [Validators.required, Validators.minLength(8)]],
    })
  }

  onSubmit(): void{
    let usuario = new Usuario();
    usuario.senha = Md5.hashStr(this.formBuilder.control("senha").value);
    usuario.email = this.formBuilder.control("email").value;
    this.autenticacaoService.fazerLogin(usuario)
      .subscribe(response => {

        },
          error => {});
    console.log(this.formulario);
  }

  cadastrarConta(): void {
    this.router.navigate(['/cadastro']);
  }

  esqueceuSenha(): void {
    this.router.navigate(['/esqueceu-senha']);
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }
}
