import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
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

  public async cadastrarCliente(cliente: Cliente) {
    console.log(`${environment.srvTCC}/cadastro/cliente`, cliente);
    console.log(this.http.post(`${environment.srvTCC}/cadastro/cliente`, cliente).subscribe(response => {
      console.log(response);
    }, erro => this.handleError(erro)));
  }

  public async cadastrarBarbearia(barbearia: Barbearia) {
    this.http.post(`${environment.srvTCC}/cadastro/barbearia`, barbearia).subscribe(response => {
      console.log(response);
      return response;
    }, erro => this.handleError(erro));
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
