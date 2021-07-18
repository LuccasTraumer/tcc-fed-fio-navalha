
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { delay } from 'rxjs/operators';

import { Endereco } from 'src/app/models/Endereco';
import { EnderecoService } from 'src/app/services/cadastro-module/endereco.service';

@Component({
  selector: 'fdn-cadastro-dados-barbearia',
  templateUrl: './cadastro-dados-barbearia.component.html',
  styleUrls: ['./cadastro-dados-barbearia.component.scss']
})
export class CadastroDadosBarbeariaComponent {
  public cepValido: boolean = true;
  public endereco: Endereco;
  public formulario;

  constructor(private formBuilder: FormBuilder, private service: EnderecoService) {
    this.formulario = this.formBuilder.group({
      cep: ''
    });
  }


  async buscarEndereco (CEP: string) {
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
    if(this.endereco !== undefined || this.endereco !== null) {
      console.log(this.endereco);
      this.formulario = this.formBuilder.group({
        cep: this.endereco
      })
    }
  }
}
