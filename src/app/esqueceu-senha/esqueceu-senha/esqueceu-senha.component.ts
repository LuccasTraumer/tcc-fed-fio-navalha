/* eslint-disable import/prefer-default-export */
import { Component } from '@angular/core';

@Component({
  selector: 'fdn-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.scss'],
})
export class EsqueceuSenhaComponent {
  public switchType: 'x';

  public textoInternoEmail: 'Insira seu email';

  public textoInternoTelefone: 'Insira seu telefone';
}
