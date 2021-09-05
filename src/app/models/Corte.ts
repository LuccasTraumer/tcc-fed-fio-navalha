import { ClienteVarejo } from './ClienteVarejo';
import { ClienteBarbearia } from './ClienteBarbearia';

export class Corte {
  consumidor: ClienteVarejo;
  prestadorServico: ClienteBarbearia;
  dataCorte: Date;
  inicioCorte: Date;
  fimCorte: Date;
  valorCorte: number;
}
