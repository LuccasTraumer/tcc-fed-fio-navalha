import { Parser } from '@angular/compiler/src/ml_parser/parser';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CadastroServiceService } from 'src/app/services/cadastro-module/cadastro-service.service';

@Component({
  selector: 'fdn-cadastro-data-nascimento',
  templateUrl: './cadastro-data-nascimento.component.html',
  styleUrls: ['./cadastro-data-nascimento.component.scss']
})
export class CadastroDataNascimentoComponent implements OnDestroy {

  private dia: number = 0;
  private mes: number = 0;
  private ano: number = 0;
  private inscricaoServico: Subscription;
  public formulario;
  public mostarMensagemErro: boolean = false;
  public dataValida: boolean = false;

  public valorDia: number = null;


  constructor(private formBuilder: FormBuilder, private cadastroService: CadastroServiceService, private router: Router) {
    this.formulario = this.formBuilder.group({
      dia: '',
      mes: '',
      ano: ''
    });
  }

  ngOnDestroy(): void {
    this.inscricaoServico.unsubscribe();
  }

  private bissexto(): boolean {
    if (this.ano % 400 == 0)
      return true;
    if (this.ano % 4 == 0 && this.ano % 100 != 0)
      return true;

    return false;
  }

  public cadastrarData() {
    if(this.valida()) {
      let data = new Date(this.dia, this.mes, this.ano);
      this.inscricaoServico = this.cadastroService.cadastroDataNascimento(data).subscribe((status) => {
          console.log(status);
      });
    }
  }

  public valida (): boolean {
      this.dataValida = false;

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

      if(this.ano <= 1920 || this.ano >= (new Date()).getFullYear())
          return false;

      this.dataValida = true;
      return true;
  }

  onSubmit() {
    if(this.valida()) {
      this.formulario = this.formBuilder.group({
        dia: this.dia,
        mes: this.mes,
        ano: this.ano
      });
    } else {
      this.mostarMensagemErro = true;
    }
  }

  validaNumero(input: string, id: string) : boolean {
    let numbers: string = '0123456789';
    let valor = input.split('');
    let container = document.getElementById(id) as HTMLInputElement;

    for(let i = 0; i< valor.length; i++) {
      if(!numbers.includes(valor[i])){
        container.value = '';
        return false;
      }
    }
    return true;
  }
  setDia(dia: string) {
    let diaValido = this.validaNumero(dia, 'dia');
    let container = document.getElementById('dia') as HTMLInputElement;
    if(diaValido) {
      this.dia = parseInt(dia);
      console.log(dia);
      if(this.dia < 1 || this.dia > 31 && dia != '') {
        container.value = '31';
      }
    }
    this.valida();
  }

  setMes(mes: string) {
    let mesValido = this.validaNumero(mes, 'mes');
    let container = document.getElementById('mes') as HTMLInputElement;
    if(mesValido) {
      this.mes = parseInt(mes);
      console.log(mes);
      if(this.mes < 1 || this.mes > 12 && mes != '') {
        container.value = '12';
      }
    }
    this.valida();
  }

  setAno(ano: string) {
    let anoValido = this.validaNumero(ano, 'ano');
    let container = document.getElementById('ano') as HTMLInputElement;
    if(anoValido && ano.length == 4) {
      this.ano = parseInt(ano);
      console.log(ano);
      let anoAtual = (new Date).getFullYear();
      if(this.ano < 1920 || this.ano > anoAtual  && ano != '') {
        container.value = anoAtual.toString();
        this.ano = anoAtual;
      }
    }
    this.valida();
  }
}
