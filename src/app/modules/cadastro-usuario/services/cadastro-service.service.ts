import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Barbearia } from '../../../models/barbearia';
import { Cliente } from '../../../models/Cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CadastroServiceService {

  private requestHeader;

  constructor(private http: HttpClient) {
    this.requestHeader = {
      headers: new HttpHeaders({'Content-Type': 'application-json'})
    };
  }

  public cadastrarCliente(cliente: Cliente) {
    return  this.http.post<Cliente>(`${environment.srvTCC}/cadastro/cliente`, cliente);
  }

  public cadastrarBarbearia(barbearia: Barbearia) {
    return this.http.post<Barbearia>(`${environment.srvTCC}/cadastro/barbearia`, barbearia);
  }
}
