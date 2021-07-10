import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { EnderecoService } from 'src/app/services/cadastro-module/endereco.service';
import { Endereco } from 'src/app/models/Endereco';


@Component({
  selector: 'fdn-cadastro-dados-cliente',
  templateUrl: './cadastro-dados-cliente.component.html',
  styleUrls: ['./cadastro-dados-cliente.component.scss']
})
export class CadastroDadosClienteComponent implements OnInit {

  constructor(private service: EnderecoService) { }

  ngOnInit(): void {
  }

  endereco: Endereco = {
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: ''
   };

  buscarEndereco(CEP: string)
  {
    if(CEP.length === 8)
    {
    console.log(CEP);
      this.service.getEndereco(CEP).pipe(delay(1500))
      .subscribe(endereco =>{
        this.endereco = endereco;
      }, err =>{
        console.log("Connection Failed")
      })
    }
  }
}
