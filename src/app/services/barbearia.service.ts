import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Barbearia } from '../models/barbearia';
import * as barbeariaMock from '../utils/mocks/barbeariaMock.json';
import { BarbeariasResponseMock } from './../utils/interfaces/BarbeariasResponseMock';

@Injectable({
  providedIn: 'root'
})
export class BarbeariaService {

  constructor() { }

  public RetornaListaBarbearias(): Observable<BarbeariasResponseMock> {
    return of<BarbeariasResponseMock>(barbeariaMock.data as any);
  }
}
