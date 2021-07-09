import { Endereco } from './../../Models/Endereco';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  getEndereco(cep: string) : Observable<Endereco> {
    return this.http.get<Endereco>("https://cors.bridged.cc/https://viacep.com.br/ws/"+cep+"/json/").pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any) : Observable<Endereco> {
    console.log(e);
    return EMPTY;
  }

}
