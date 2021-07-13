import { ClienteVarejo } from './ClienteVarejo';
import { ClienteBarbearia } from './ClienteBarbearia';

export class Corte {
  consumidor: ClienteVarejo;
  prestadorServico: ClienteBarbearia;
  inicioCorte: Date;
  fimCorte: Date;
  valorCorte: number;
}
