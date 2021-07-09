import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Endereco } from 'src/app/models/Endereco';


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private API_CEP = environment.API_CEP;
  private http: HttpClient;

  constructor() {
    this.http = new HttpClient(null);
  }

  getEndereco(cep: string) : Observable<Endereco> {
    return this.http.get<Endereco>(`${this.API_CEP + cep}/json/`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any) : Observable<Endereco> {
    console.log(e);
    return EMPTY;
  }

}
