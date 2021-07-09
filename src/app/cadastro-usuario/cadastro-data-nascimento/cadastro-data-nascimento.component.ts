import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CadastroServiceService } from '../services/cadastro-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'fdn-cadastro-data-nascimento',
  templateUrl: './cadastro-data-nascimento.component.html',
  styleUrls: ['./cadastro-data-nascimento.component.scss']
})
export class CadastroDataNascimentoComponent implements OnDestroy {

  private dia: number;
  private mes: number;
  private ano: number;

  private inscricaoServico: Subscription;

  constructor(private cadastroService: CadastroServiceService) { }

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

  setDia(dia: number) {
    this.dia = dia;
  }

  setMes(mes: number) {
    this.mes = mes;
  }

  setAno(ano: number) {
    if (ano > new Date().getFullYear())
      alert('Ano Invalido!');
  }

}
