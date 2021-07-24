import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fdn-cadastro-email-celular',
  templateUrl: './cadastro-email-celular.component.html',
  styleUrls: ['./cadastro-email-celular.component.scss']
})
export class CadastroEmailCelularComponent {

  private primeiraVez: boolean = true;
  public switchType: string = 'numero';
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
    this.switchType = 'numero';
    this.opcao = 0;
    this.textoInterno = "Insira seu Telefone"
  }

  escolherEmail() {
    let container = document.getElementById('text') as HTMLInputElement;
    container.value = '';
    this.isValido = false;
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
    this.emailCadastrado.emit(`${this.switchType}: ${this.valorInput}`);
  }

  public campoValido(): boolean {
    if(this.valorInput !== undefined && this.valorInput.length > 7) {
      this.primeiraVez = false;
      return true;
    }

    if (this.primeiraVez)
      return true;

    if(!this.validarNumero() && this.valorInput.includes('@') && this.valorInput.includes('.')) {
      return true;
    } else if(this.validarNumero()) {
      return true
    }
    return false;
  }

  validarNumero(){
    let numbers: string = '0123456789';
    let valor = this.valorInput.split('');
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
    if(this.switchType === 'numero') {
      this.validarNumero();
    }

    if((evento.length == 11 || evento.length == 12) && this.switchType == 'numero') {
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
