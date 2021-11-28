import { Injectable } from '@angular/core';
import { BarbeariaDetalhes } from 'src/app/models/BarbeariaDetalhes';

@Injectable({
  providedIn: 'root'
})
export class DadosCardService {

constructor() { }

public gravaDadosCardNaSessionStorage(objeto: BarbeariaDetalhes): void {
  sessionStorage.setItem('nome-info', objeto.nome);
  sessionStorage.setItem('rua-info', objeto.rua);
  sessionStorage.setItem('bairro-info', objeto.bairro);
  sessionStorage.setItem('cidade-info', objeto.cidade);
  sessionStorage.setItem('estado-info', objeto.estado);
  sessionStorage.setItem('estado-info', objeto.numero);
  sessionStorage.setItem('telefone-info', objeto.telefone);
  sessionStorage.setItem('email-info', objeto.email);
}
}
