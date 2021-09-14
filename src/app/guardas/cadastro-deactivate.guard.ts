import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CadastroDeactivate } from '../models/cadastro-deactive.interface';


@Injectable()
export class CadastroDeactiveGuard implements CanDeactivate<CadastroDeactivate> {
  canDeactivate(
    component: CadastroDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log('Cheguei no Guarda de Rotas!');
    return component.prosseguir != false;
  }
}
