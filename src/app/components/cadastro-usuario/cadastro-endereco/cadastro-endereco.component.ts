import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { delay } from "rxjs/operators";
import { Endereco } from "src/app/models/Endereco";
import { EnderecoService } from "src/app/services/cadastro-module/endereco.service";
import { Router } from '@angular/router';

@Component({
  selector: 'fdn-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.scss']
})

export class CadastroEnderecoComponent {

  public cepValido: boolean = true;
  public endereco: Endereco;
  public formulario;

  public texto: string;
  public textoTitulo: string;

  constructor(private formBuilder: FormBuilder, private service: EnderecoService, private router: Router) {
    this.formulario = this.formBuilder.group({
      cep: '',
      numero: '',
      complemento: ''
    });

    let clienteJson = sessionStorage.getItem('cliente');
    let clienteJsonParseado = JSON.parse(clienteJson);

    if(clienteJsonParseado['tipoCliente'] === 'clienteBarbearia')
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

  onSubmit() {
    let clienteJson = sessionStorage.getItem('cliente');
    let clienteJsonParseado = JSON.parse(clienteJson);

    console.log(this.endereco);
    this.buscarEndereco(this.formulario.value['cep']);

    clienteJsonParseado['cep'] = this.formulario.value['cep'];
    clienteJsonParseado['numero'] = this.formulario.value['numero'];
    clienteJsonParseado['complemento'] = this.formulario.value['complemento'];
    sessionStorage.setItem('cliente', JSON.stringify(clienteJsonParseado));

    this.router.navigate(['cadastro/foto']);
  }
}
