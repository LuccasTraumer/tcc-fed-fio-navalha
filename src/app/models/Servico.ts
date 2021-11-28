import {Barbearia} from "./barbearia";
import {Cliente} from "./Cliente";

export class Servico {
  consumidor: Cliente;
  prestadorServico: Barbearia;
  dataCorte: Date;
  inicioCorte: Date;
  fimCorte: Date;
  valorCorte: number;
}
