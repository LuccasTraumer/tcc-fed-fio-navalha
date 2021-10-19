import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fdn-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})

export class PerfilComponent {
  public primeiraVez: boolean = true;
  public switchType: string = 'number';
  public valorComMascara: string;
  public opcao = 0;


  public isValido: boolean = false;

  public valor: boolean = true;

  constructor() {}

  escolherPerfil() {
    /*let container = document.getElementById('text') as HTMLDivElement;*/
    let cep = '1000-000'
    let nome = 'teste'
    let rua = 'qualquer'
    let numeroCasa = 777
    let bairro = 'jardim joselina'
    let email = 'seila@gmail.com'
    let number = 19983191943
    let container = document.getElementById('text').innerHTML = "Endereço<br> cep: "+cep+"<br> rua: "+rua+", "+numeroCasa+"<br> bairro: "+bairro+" <hr> Contato<br> Tel: "+number +"<br> email: "+email+""
    this.isValido = false;
    this.primeiraVez = true;
    this.switchType = 'number';
    this.opcao = 0;
  }

  escolherConfiguracao() {
    let container = document.getElementById('text') as HTMLDivElement;
    let modo = 'to do'
    let idioma = 'to do'
    container.innerHTML = "Modo escuro: "+modo+"<br> idioma: "+idioma+"";
    this.isValido = false;
    this.primeiraVez = true;
    this.switchType = 'email';
    this.opcao = 1;
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
}
