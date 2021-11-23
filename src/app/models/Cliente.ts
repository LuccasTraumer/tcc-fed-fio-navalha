
import { Usuario } from "./Usuario";
import {Corte} from "./Corte";

export class Cliente extends Usuario {
  saldoCarteira: number;
  notaCliente: number;
  //listaBarbeariasFavoritas: ClienteBarbearia[];
  comentarios: string[];
  reputacao: number;
  listaServicoConsumidos: Corte[];
}
