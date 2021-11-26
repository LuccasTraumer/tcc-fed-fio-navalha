import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AgendamentosResponseMock } from 'src/app/utils/interfaces/AgendamentosResponseMock c';
import * as AgendamentoMock from '../../utils/mocks/AgendamentoMock.json';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

constructor() { }

public RetornaListaAgendamentos(): Observable<AgendamentosResponseMock> {
  return of<AgendamentosResponseMock>(AgendamentoMock.data as any);
}

}
