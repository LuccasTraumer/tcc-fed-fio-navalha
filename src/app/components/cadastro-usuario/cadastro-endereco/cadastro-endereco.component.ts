import { Component, Input, Output, EventEmitter } from '@angular/core';
import { delay } from "rxjs/operators";

import { Endereco } from "src/app/models/Endereco";
import { EnderecoService } from "src/app/services/cadastro-module/endereco.service";

@Component({
  selector: 'fdn-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.scss']
})

export class CadastroEnderecoComponent {

  public cepValido: boolean = true;
  public endereco: Endereco;

  public texto: string;
  public textoTitulo: string;

  @Input()
  tipoCliente: string;

  @Output()
  enderecoCliente = new EventEmitter<Endereco>();


  constructor(private service: EnderecoService) {
    if(this.tipoCliente === 'clienteBarbearia')
      this.isBarbearia();
    else
      this.isClienteVarejo();
  }

  isBarbearia(): void {
    this.texto = 'Para que seus clientes encontrem você com mais facilidade precisamos de alguns dados';
    this.textoTitulo = 'Informações Sobre o Salão';
  }

  isClienteVarejo() {
    this.texto = 'Para que você possa encontrar um salão próximo a sua casa';
    this.textoTitulo = 'Informações Sobre seu Endereço';
  }

  private async buscarEndereco (CEP: string) {
    if (CEP.length === 8) {
      await this.service.getEndereco(CEP).pipe(delay(1500))
      .subscribe(endereco => {
        this.endereco = endereco;
      }, err => {
        this.cepValido = false;
      });
    }
  }

  onSubmit(cep: string, numero: string, complemento: string) {
    console.log(cep);
    // this.buscarEndereco(cep.value);

    this.enderecoCliente.emit(this.endereco);
  }
}
