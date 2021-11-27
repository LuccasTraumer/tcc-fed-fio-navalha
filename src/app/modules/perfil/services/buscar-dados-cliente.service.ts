import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../../../models/Usuario";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BuscarDadosClienteService {

  constructor(private http: HttpClient) { }

  buscarDadosCliente(email: string, tipoCliente: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.srvTCC}/perfil/${tipoCliente}`, {"email" : email});
  }
}
