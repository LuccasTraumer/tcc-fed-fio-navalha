/* eslint-disable import/prefer-default-export */
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'fdn-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.scss'],
})
export class EsqueceuSenhaComponent {
  public primeiraVez: boolean = true;
  public switchType: string = 'number';
  public textoInterno: string = "Insira seu Telefone";
  private valorInput: string = "";
  public valorComMascara: string;
  public opcao = 0;

  @Output() emailCadastrado = new EventEmitter<string>();
  public isValido: boolean = false;

  public valor: boolean = true;

  constructor() {}

  escolherTelefone() {
    let container = document.getElementById('text') as HTMLInputElement;
    container.value = '';
    this.isValido = false;
    this.primeiraVez = true;
    this.switchType = 'number';
    this.opcao = 0;
    this.textoInterno = "Insira seu Telefone"
  }

  escolherEmail() {
    let container = document.getElementById('text') as HTMLInputElement;
    container.value = '';
    this.isValido = false;
    this.primeiraVez = true;
    this.switchType = 'email';
    this.opcao = 1;
    this.textoInterno = "Insira seu E-mail";
  }

  public enviarCodigo(): void {
    // if(this.opcao == 0)
    //   // alert("Código enviado para seu número");
    // else
    //   // alert("Código enviado para seu email")
  }

  public onSubmit(): void {
    //this.emailCadastrado.emit(`${this.switchType}: ${this.valorInput}`);
  }

  public campoValido(): boolean {
    if(this.valorInput !== undefined && this.valorInput.length > 7) {
      this.primeiraVez = false;
      return true;
    }

    if (this.primeiraVez)
      return true;

    if(this.valorInput.includes('@') && this.valorInput.includes('.'))
      return true;

    return false;
  }



  public pegarInput(evento: string): void {
    this.valorInput = evento;
    this.primeiraVez = false;
    if(this.switchType === 'number' && evento.length > 11) {
      let container = document.getElementById('text') as HTMLInputElement;
      container.value = evento.substring(0, 11);
      this.isValido = true;
      return;
    }

    if((evento.length == 11) && this.switchType == 'number') {
      this.valorInput = `(${evento.substring(0,2)})${evento.substring(2,7)}-${evento.substring(7,11)}`;
      this.isValido = true;
      return;
    }
    if(evento.includes('@gmail.com') || evento.includes('@hotmail.com')) {
      this.isValido = true;
      return;
    }
    this.isValido = false;
  }
}
