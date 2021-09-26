import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fdn-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

    public primeiraVez: boolean = true;
    public switchType: string = 'number';
    public valorComMascara: string;
    public opcao = 0;

    public isValido: boolean = false;
    public valor: boolean = true;
    constructor() {}

    escolherPerfil() {
      let container = document.getElementById('text') as HTMLInputElement;
      container.value = '';
      this.switchType = 'perfil';
      this.opcao = 0;
    }

    escolherConfiguracoes() {
      let container = document.getElementById('text') as HTMLInputElement;
      container.value = '';
      this.isValido = false;
      this.switchType = 'configuracoes';
      this.opcao = 1;
    }

    informations(){
      var button = document.getElementById("button");

      button.addEventListener("click", function(){
          var container = document.getElementById("profile");
          if(container.style.display === "none"){
              container.style.display = "block"
          }else{
              container.style.display = "none"
          }
      });
    }
  ngOnInit(): void {
  }
}
