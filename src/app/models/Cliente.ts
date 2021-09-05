import { Usuario } from "./Cliente";
import { ClienteBarbearia } from './ClienteBarbearia';
import { Corte } from "./corte";

export class Cliente extends Usuario {
  saldoCarteira: number;
  notaCliente: number;
  listaBarbeariasFavoritas: ClienteBarbearia[];
  comentarios: string[];
  reputacao: number;
  listaServicoConsumidos: Corte[];
}
