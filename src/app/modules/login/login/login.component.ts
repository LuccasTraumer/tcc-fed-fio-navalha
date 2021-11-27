import {Component, OnInit} from '@angular/core';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../cadastro-usuario/services/autenticacao.service';
import { Usuario } from '../../../models/Usuario';
import {Cliente} from "../../../models/Cliente";
import {Barbearia} from "../../../models/barbearia";

@Component({
  selector: 'fdn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formulario: FormGroup;
  public pathImage = ConstantesIcons.LOGO_ICON_PNG;
  public background: string = "../../../assets/images/barber-image-pentes.jpg";
  public mostrarMensagem: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private autenticacaoService: AutenticacaoService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required]],
      senha: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void{
    let usuario = new Usuario();
    usuario.senha = this.formulario.controls["senha"].value;
    usuario.email = this.formulario.controls["email"].value;

    this.autenticacaoService.fazerLogin(usuario)
      .pipe()
      .subscribe((response: any) => {
        sessionStorage.setItem('jwtUser', JSON.stringify(response.body));
        this.autenticacaoService.setUsuarioAutenticado(LoginComponent.prototype, true);
        const tipoCliente = response.body.tipoCliente.split('.')[4];
        if(tipoCliente !== undefined && (tipoCliente === Cliente.name || tipoCliente === Barbearia.name)) {
          this.autenticacaoService.setUsuarioAutenticado(LoginComponent.prototype, true);
          this.router.navigate([`/home-${tipoCliente.toLocaleLowerCase()}`]);
        }
        },error => {
          console.error('Erro ao tentar efetuar Login do Cliente {}.', usuario.email);
          this.mostrarMensagem = true;
        }
      );
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
      this.formulario.get(campo) != undefined &&
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }
}
