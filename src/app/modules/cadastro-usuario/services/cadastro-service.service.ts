import {Observable, throwError} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {retry, catchError, take} from 'rxjs/operators';
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
    const retorno = this.http.post<Cliente>(`${environment.srvTCC}/cadastro/cliente`, cliente);
    console.log(cliente);
    return retorno;
  }

  public cadastrarBarbearia(barbearia: Barbearia) {
    return this.http.post<Barbearia>(`${environment.srvTCC}/cadastro/barbearia`, barbearia);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    alert(errorMessage);
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
