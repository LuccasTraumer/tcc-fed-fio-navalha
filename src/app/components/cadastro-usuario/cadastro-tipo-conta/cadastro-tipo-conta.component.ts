import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'fdn-cadastro-tipo-conta',
  templateUrl: './cadastro-tipo-conta.component.html',
  styleUrls: ['./cadastro-tipo-conta.component.scss']
})
export class CadastroTipoContaComponent {

  public opcaoSelecionada: number;
  public isTipoContaValido: boolean = false;
  public formulario;

  constructor(private formBuilder: FormBuilder, private route: Router) {
    this.formulario = this.formBuilder.group({
      codigoConfirmacao: ''
    });
  }

  escolherConta(tipoConta: number) {
    this.isTipoContaValido = true;
    this.opcaoSelecionada = tipoConta;
    localStorage.setItem("tipo-conta", tipoConta.toString());
  }

  onSubmit() {
    console.log(this.formulario.value);
    //console.log(this.value);
    this.formulario.reset();
    this.route.navigateByUrl("/cadastro/info-login");
  }
}
