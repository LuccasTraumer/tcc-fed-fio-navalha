import { Injectable } from '@angular/core';
import { BarbeariaDetalhes } from 'src/app/models/BarbeariaDetalhes';
import {Barbearia} from "../../../models/barbearia";

@Injectable({
  providedIn: 'root'
})
export class DadosCardService {

constructor() { }

public gravaDadosCardNaSessionStorage(barbearia: Barbearia): void {
  sessionStorage.setItem('barbearia', JSON.stringify(barbearia));
}
}
