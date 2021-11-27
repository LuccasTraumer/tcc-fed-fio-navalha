import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BarbeariasResponseMock } from 'src/app/utils/interfaces/BarbeariasResponseMock';
import { Barbearia } from '../../models/barbearia';
import * as barbeariaMock from '../../utils/mocks/barbeariaMock.json';


@Injectable({
  providedIn: 'root'
})
export class BarbeariaService {

  constructor() { }

  public RetornaListaBarbearias(): Observable<BarbeariasResponseMock> {
    return of<BarbeariasResponseMock>(barbeariaMock.data as any);
  }
}
