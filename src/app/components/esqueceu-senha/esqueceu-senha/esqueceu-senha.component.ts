/* eslint-disable import/prefer-default-export */
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'fdn-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.scss'],
})
export class EsqueceuSenhaComponent {
  public formulario;

  public switchType: string;
  public textoInterno: string = "Insira seu Telefone";
  public opcao: number = 0;

  private primeiraVez: boolean = true;
  private valorInput: string = "";

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formulario = this.formBuilder.group({
      email: '',
      telefone: ''
    });
  }

  chosePhone() {
    this.switchType = 'TELEFONE'
    this.opcao = 0;
    this.textoInterno = "Insira seu Telefone"
    console.log(this.opcao);
  }

  choseEmail() {
    this.switchType = 'E-MAIL'
    this.opcao = 1;
    this.textoInterno = "Insira seu E-mail"
    console.log(this.opcao);
  }


  onSubmit() {
    if(this.isCelular()) {
      this.formulario = this.formBuilder.group({
        celular: this.valorInput,
        email: ''
      });

    } else {
      this.formulario = this.formBuilder.group({
        celular: '',
        email: this.valorInput
      });
    }

    this.router.navigate(['']);
  }

  public campoValido(): boolean {
    if(this.valorInput !== undefined && this.valorInput.length > 7) {
      this.primeiraVez = false;
      return true;
    }

    if (this.primeiraVez)
      return true;

    if(!this.isCelular() && this.valorInput.includes('@') && this.valorInput.includes('.')) {
      return true;
    } else if(this.isCelular()) {
      return true
    }
    return false;
  }

  public pegarInput(evento: string): void {
    this.valorInput = evento;

    if(evento.length == 11) {
      this.valorInput = `(${evento.substring(0,2)})${evento.substring(2,7)}-${evento.substring(7,11)}`;
    }
  }

  private isCelular(): boolean {
    return this.switchType === 'number' && this.valorInput.length == 14;
  }

  public enviarCodigo(): void {
    if(this.opcao == 0)
      alert("Código enviado para seu número");
    else
      alert("Código enviado para seu email")
  }
}
