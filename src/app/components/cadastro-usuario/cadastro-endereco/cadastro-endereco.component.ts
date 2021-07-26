import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { delay } from "rxjs/operators";
import { ClienteBarbearia } from 'src/app/models/ClienteBarbearia';

import { Endereco } from "src/app/models/Endereco";
import { EnderecoService } from "src/app/services/cadastro-module/endereco.service";

@Component({
  selector: 'fdn-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.scss']
})

export class CadastroEnderecoComponent implements OnDestroy {

  public cepValido: boolean = true;
  public endereco: Endereco;

  public texto: string;
  public textoTitulo: string;
  private inscricao: Subscription;

  @Input()
  tipoCliente: string;

  @Output()
  enderecoCliente = new EventEmitter<Endereco>();


  constructor(private service: EnderecoService) {
    this.endereco = new Endereco();
    if(this.tipoCliente === ClienteBarbearia.name)
      this.isBarbearia();
    else
      this.isClienteVarejo();
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  isBarbearia(): void {
    this.texto = 'Para que seus clientes encontrem você com mais facilidade precisamos de alguns dados';
    this.textoTitulo = 'Informações Sobre o Salão';
  }

  isClienteVarejo() {
    this.texto = 'Para que você possa encontrar um salão próximo a sua casa';
    this.textoTitulo = 'Informações Sobre seu Endereço';
  }

  private async buscarEndereco (cep: string, numero: string, complemento: string) {
    await (await this.service.getEndereco(cep)).subscribe((end) => {
      this.endereco = end;
      this.endereco.numeroResidencia = numero;
      this.endereco.complemento = complemento;
      this.enderecoCliente.emit(this.endereco);
    });
  }

  onSubmit(cep: string, numero: string, complemento: string) {
    this.buscarEndereco(cep, numero, complemento);
  }
}
