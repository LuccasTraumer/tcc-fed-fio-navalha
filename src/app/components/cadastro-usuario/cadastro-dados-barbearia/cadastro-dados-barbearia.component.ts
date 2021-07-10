
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Endereco } from 'src/app/models/Endereco';
import { EnderecoService } from 'src/app/services/cadastro-module/endereco.service';

@Component({
  selector: 'fdn-cadastro-dados-barbearia',
  templateUrl: './cadastro-dados-barbearia.component.html',
  styleUrls: ['./cadastro-dados-barbearia.component.scss']
})
export class CadastroDadosBarbeariaComponent implements OnInit {

  private service: EnderecoService

  constructor() {
    this.service = new EnderecoService();
  }


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

<<<<<<< Updated upstream:src/app/components/cadastro-usuario/cadastro-dados-barbearia/cadastro-dados-barbearia.component.ts
<<<<<<< Updated upstream:src/app/components/cadastro-usuario/cadastro-dados-barbearia/cadastro-dados-barbearia.component.ts
  BuscarEndereco(CEP: string) {
=======
=======
>>>>>>> Stashed changes:src/app/cadastro-usuario/cadastro-dados-barbearia/cadastro-dados-barbearia.component.ts
  buscarEndereco(CEP: string)
  {
    if(CEP.length === 8)
    {
<<<<<<< Updated upstream:src/app/components/cadastro-usuario/cadastro-dados-barbearia/cadastro-dados-barbearia.component.ts
>>>>>>> Stashed changes:src/app/cadastro-usuario/cadastro-dados-barbearia/cadastro-dados-barbearia.component.ts
=======
>>>>>>> Stashed changes:src/app/cadastro-usuario/cadastro-dados-barbearia/cadastro-dados-barbearia.component.ts
    console.log(CEP);
    if (CEP.length === 8) {
      this.service.getEndereco(CEP).pipe(delay(1500))
      .subscribe(endereco =>{
        this.endereco = endereco;
      }, err =>{
        console.log("Connection Failed")
      })
    }
  }

}
