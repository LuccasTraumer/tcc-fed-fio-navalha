import { Cliente } from "./Cliente";
import { ClienteBarbearia } from './ClienteBarbearia';
import { Corte } from "./Corte";

export class ClienteVarejo extends Cliente {
  saldoCarteira: number;
  notaCliente: number;
  listaBarbeariasFavoritas: ClienteBarbearia[];
  comentarios: string[];
  reputacao: number;
  listaServicoConsumidos: Corte[];
}
