
import { Corte } from "./corte";
import { Usuario } from "./Usuario";

export class Cliente extends Usuario {
  saldoCarteira: number;
  notaCliente: number;
  //listaBarbeariasFavoritas: ClienteBarbearia[];
  comentarios: string[];
  reputacao: number;
  listaServicoConsumidos: Corte[];
}
