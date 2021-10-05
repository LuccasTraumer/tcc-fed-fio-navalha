import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Barbearia } from 'src/app/models/barbearia';
import { Endereco } from "src/app/models/endereco";
import { EnderecoService } from "src/app/services/cadastro-module/endereco.service";

@Component({
  selector: 'fdn-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.scss']
})

export class CadastroEnderecoComponent implements OnDestroy {

  public cepValido: boolean = false;
  public numeroValido: boolean = false;
  public endereco: Endereco;
  public cep: String = "";
  public numero: number = null;
  public texto: string;
  public textoTitulo: string;
  private inscricao: Subscription;

  @Input()
  public tipoCliente: string;

  @Output()
  public enderecoCliente = new EventEmitter<Endereco>();

  constructor(private service: EnderecoService) {
    this.endereco = new Endereco();
    if(this.tipoCliente === Barbearia.name)
      this.isBarbearia();
    else
      this.isClienteVarejo();
  }

  private apenasNumeros(valor: string) {
    let valorTrincado = valor.trim();
    let numeros = "0123456789";
    for(let i = 0; i < valor.length; i++)
    {
      if(!numeros.includes(valorTrincado[i]))
      {
        this.cep = "";
        return false;
      }
    }
    return true;
  }

  public async validaCep(cep: string) {

    if(!this.apenasNumeros(cep))
    {
      return;
    }
    if(cep.length < 8)
      this.resetaEndereco();

    if(cep.length == 8)
    {
      await this.buscarEndereco(cep);
      if(this.endereco.erro || this.endereco.erro == undefined) {
        console.log(this.endereco.erro);
        this.resetaEndereco();
        this.cepValido = true;
        return;
      }
      this.cepValido = true;
      return;
    }
    this.cepValido = false;
  }

  public validaNumero(numero: number) {
    if(numero.toString().length > 7){
      this.numero = parseInt(this.numero.toString().substring(0,7));
    }

    if(this.numero != null)
    {
      this.numeroValido = true;
      return;
    }
    this.numeroValido = false;
  }

  ngOnDestroy(): void {
   // this.inscricao.unsubscribe();
  }

  public isBarbearia(): void {
    this.texto = 'Para que seus clientes encontrem você com mais facilidade precisamos de alguns dados';
    this.textoTitulo = 'Informe Endereço';
  }

  public isClienteVarejo() {
    this.texto = 'Para que você possa encontrar um salão próximo a sua casa';
    this.textoTitulo = 'Informe Endereço';
  }

  private async buscarEndereco (cep: string) {
    return this.service.getEndereco(cep).subscribe((end: Endereco) => {
      this.endereco.erro = end.erro ? true : false;
      this.endereco = !end.erro ? end : this.endereco;
    }, error => {
      this.resetaEndereco();
      console.log(error)
    });
  }

  private resetaEndereco()
  {
      this.endereco.logradouro = "";
      this.endereco.cep = "";
      this.endereco.bairro = "";
      this.endereco.ddd = "";
      this.endereco.ibge = "";
      this.endereco.localidade = "";
      this.endereco.uf = "";
      this.endereco.erro = false;
  }

  private emitirValor(numero: string, complemento: string) {
      this.endereco.numeroResidencia = numero;
      this.endereco.complemento = complemento;
      this.enderecoCliente.emit(this.endereco);
  }

  onSubmit(numero: string, complemento: string) {
    this.emitirValor(numero, complemento);
  }
}
