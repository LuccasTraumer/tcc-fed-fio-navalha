import { Cliente } from './cliente';
import { Barbearia } from './barbearia';

export class Corte {
  consumidor: Cliente;
  prestadorServico: Barbearia;
  dataCorte: Date;
  inicioCorte: Date;
  fimCorte: Date;
  valorCorte: number;
}
