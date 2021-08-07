import { Component } from '@angular/core';
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
  private valorInput: string = "";
  public formulario;
  public isValido: boolean = false;

  private cliente: Cliente;
  public valor: boolean = true;
  constructor(private formBuilder: FormBuilder, private routes: Router) {
    this.formulario = this.formBuilder.group({
      email: '',
      celular: ''
    });

    this.cliente = new Cliente();
  }


  escolherTelefone() {
    let container = document.getElementById('text') as HTMLInputElement;
    container.value = '';
    this.isValido = false;
    this.switchType = 'text'
    this.opcao = 0;
    this.textoInterno = "Insira seu Telefone"
  }

  escolherEmail() {
    let container = document.getElementById('text') as HTMLInputElement;
    container.value = '';
    this.isValido = false;
    this.switchType = 'email'
    this.opcao = 1;
    this.textoInterno = "Insira seu E-mail"
  }

  public enviarCodigo(): void {
    // if(this.opcao == 0)
    //   // alert("Código enviado para seu número");
    // else
    //   // alert("Código enviado para seu email")
  }

  public onSubmit(): void {
    if(this.isCelular()) {
      this.formulario = this.formBuilder.group({
        celular: this.valorInput,
        email: ''
      });

      this.cliente.telefone = this.valorInput;
    } else {
      this.formulario = this.formBuilder.group({
        celular: '',
        email: this.valorInput
      });
      this.cliente.email = this.valorInput;
    }

    sessionStorage.setItem('cliente', JSON.stringify(this.cliente));
    console.log("ONSUBMIT")
    console.log(this.routes.navigate(['codigo-confirmacao']));
    this.routes.navigateByUrl('/cadastro/codigo-confirmacao');
  }
  isvalido(contato: string){
    if(contato.length > 0)
      this.isValido = true;

    this.isValido = false;
    sessionStorage.setItem('cliente', JSON.stringify(this.cliente));
    this.routes.navigate(['cadastro/codigo-confirmacao']);
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

  validaNumero(input: string){
    let numbers: string = '0123456789';
    let valor = input.split('');
    let container = document.getElementById('text') as HTMLInputElement;

    for(let i = 0; i< valor.length; i++) {
      if(!numbers.includes(valor[i]) || valor.length > 11){
        let valor = container.value;
        console.log(valor);
        container.value = valor.substring(0, valor.length-1);
        return false;
      }
    }
    return true;
  }

  public pegarInput(evento: string): void {
    this.valorInput = evento;
    console.log(this.opcao)
    if(this.opcao == 0) {
      this.validaNumero(evento);
      console.log(evento.length)
    }

    if((evento.length == 11 || evento.length == 12) && this.opcao == 0) {
      this.valorInput = `(${evento.substring(0,2)})${evento.substring(2,7)}-${evento.substring(7,11)}`;
      this.isValido = true;
      console.log("VALOR: "+this.valorInput);
      return;
    }
    if(evento.includes('@gmail.com') || evento.includes('@hotmail.com')) {
      this.isValido = true;
      return;
    }
    this.isValido = false;
  }

  private isCelular(): boolean {
    return this.switchType === 'number' && this.valorInput.length == 14;
  }
}
