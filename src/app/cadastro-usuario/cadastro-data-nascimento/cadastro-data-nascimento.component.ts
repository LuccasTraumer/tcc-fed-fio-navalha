import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'fdn-cadastro-data-nascimento',
  templateUrl: './cadastro-data-nascimento.component.html',
  styleUrls: ['./cadastro-data-nascimento.component.scss']
})
export class CadastroDataNascimentoComponent {

  private dia: number;
  private mes: number;
  private ano: number;

  constructor() { }

  private bissexto(): boolean {
    if (this.ano % 400 == 0)
      return true;
    if (this.ano % 4 == 0 && this.ano % 100 != 0)
      return true;

    return false;
  }

  public valida (): boolean {
      if (this.dia < 1 || this.dia > 31)
          return false;

      if (this.mes < 1 || this.mes > 12)
          return false;

      if ((this.mes == 4 || this.mes == 6 || this.mes == 9 || this.mes == 11) && this.dia > 30)
          return false;

      if (this.mes == 2 && this.bissexto() && this.dia > 29)
          return false;

      if (this.mes == 2 && !this.bissexto() && this.dia > 28)
          return false;

      return true;
  }

  getDia(dia) {
    if(this.diaMesValido(dia))
      this.dia = dia;
    else
      alert('Dia Invalido!');
  }

  getMes(mes) {
    if (this.diaMesValido(mes))
      this.mes = mes;
    else
      alert('Mes Invalido!');
  }

  getAno(ano) {
    if (ano.length == 4)
      this.ano = ano;
    else if (ano.length > 4)
      alert('Ano Invalido!');
  }

  private diaMesValido(value) {
    if(value.length > 2) {
      return false;
    }
    return true;
  }

}
