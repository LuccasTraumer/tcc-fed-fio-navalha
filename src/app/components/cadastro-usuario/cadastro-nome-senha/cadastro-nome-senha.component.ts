import { environment } from './../../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'fdn-cadastro-nome-senha',
  templateUrl: './cadastro-nome-senha.component.html',
  styleUrls: ['./cadastro-nome-senha.component.scss']
})
export class CadastroNomeSenhaComponent {

  public formulario;
  private httpOptions;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.formulario = this.formBuilder.group({
      nome: '',
      senha: ''
    });

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  onSubmit() {
    console.log(this.formulario.value);
    // Em cada componente que precise de validação, fazer a request e validar o campo necessario mas só enviar os dados para cadastro no ultimo form
    // enquanto a navegação pelos componentes acontece, iremos mandando os dados um para o outro.

    this.http.post(`${environment.srvTCC}/teste`, JSON.stringify(this.formulario.value), this.httpOptions).subscribe(() => {

    });
  }

}
