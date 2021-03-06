import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private options;

  constructor(private http: HttpClient) {
    this.options = {
      observe: "response" as 'body',
      responseType: "json",
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }
  }

  buscarDadosIniciais() {
    const jwt = sessionStorage.getItem('jwtUser');
    return this.http.post(`${environment.srvTCC}/search`, JSON.parse(jwt).email, this.options);
  }

  buscarBarbearia(nomeBarbearia: string) {
    return this.http.get(`${environment.srvTCC}/search?nome=${nomeBarbearia}`, this.options);
  }
}
