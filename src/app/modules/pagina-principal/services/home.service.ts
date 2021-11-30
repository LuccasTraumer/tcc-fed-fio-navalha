import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Servico} from "../../../models/Servico";
import {Barbearia} from "../../../models/barbearia";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  buscarDadosHomeCliente() {
    return this.http.get<ClientResponse>(`${environment.srvTCC}/home/cliente`);
  }

  buscarDadosHomeBarbearia() {

  }
}

export class ClientResponse {
  listaDeServicos: Servico[];
  listaBarbeariasVisitadas: Barbearia[];
  listaBarbeariasFavotitas: Barbearia[];
}
