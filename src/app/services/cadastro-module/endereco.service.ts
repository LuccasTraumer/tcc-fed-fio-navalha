import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Endereco } from 'src/app/models/Endereco';


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private API_CEP = environment.API_CEP;
  private endereco;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {}

  getEndereco(cep: string): Observable<any> {
    return this.http.get(`${this.API_CEP + cep}/json/`);
  }

  private errorHandler(e: any) : Observable<Endereco> {
    console.log(e);
    return EMPTY;
  }
}
