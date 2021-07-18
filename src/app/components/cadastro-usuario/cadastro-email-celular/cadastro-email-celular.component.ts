import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Cliente } from '../../../models/Cliente';

@Component({
  selector: 'fdn-cadastro-email-celular',
  templateUrl: './cadastro-email-celular.component.html',
  styleUrls: ['./cadastro-email-celular.component.scss']
})
export class CadastroEmailCelularComponent {

  private primeiraVez: boolean = true;
  public switchType: string = 'number';
  public textoInterno: string = "Insira seu Telefone";
  public opcao: number = 0;
  private valorInput: string;
  public formulario;
  private valorComMascara: string;

  private cliente: Cliente;

  constructor(private formBuilder: FormBuilder, private routes: Router) {
    this.formulario = this.formBuilder.group({
      email: '',
      celular: ''
    });

    this.cliente = new Cliente();
  }

  ChosePhone() {
    this.switchType = 'number'
    this.opcao = 0;
    this.textoInterno = "Insira seu Telefone"
  }

  ChoseEmail() {
    this.switchType = 'email'
    this.opcao = 1;
    this.textoInterno = "Insira seu E-mail"
    console.log(this.opcao);
  }

  EnviarCodigo() {
    if(this.opcao == 0)
      alert("Código enviado para seu número");
    else
      alert("Código enviado para seu email")
  }

  onSubmit() {
    if(this.isCelular(this.valorInput)) {
      this.formulario = this.formBuilder.group({
        celular: this.valorInput,
        email: ''
      });

      this.cliente.telefone = this.valorInput as unknown as number;
    } else {
      this.formulario = this.formBuilder.group({
        celular: '',
        email: this.valorInput
      });
      this.cliente.email = this.valorInput;
    }

    // sessionStorage.setItem('cliente', JSON.stringify(this.cliente));
    console.log(this.routes.navigate(['codigo-confirmacao']));
    // this.routes.navigate(['/codigo-confirmacao'])
  }

  valido(): boolean {
    if(this.valorInput.length > 7) {
      this.primeiraVez = false;
      return true;
    }

    if (this.primeiraVez)
      return true;

    if(!this.isCelular(this.valorInput) && this.valorInput.includes('@') && this.valorInput.includes('.')) {
      return true;
    } else if(this.isCelular(this.valorInput)) {
      return true
    }
    return false;
  }

  pegarInput(evento: string) {
    this.valorInput = evento;

    if(evento.length == 11) {
      this.valorInput = `(${evento.substring(0,2)})${evento.substring(2,7)}-${evento.substring(7,11)}`;
    }
  }

  private isCelular(valorInput: string): boolean {
    return this.switchType === 'number' && this.valorInput.length == 14;
  }
}
