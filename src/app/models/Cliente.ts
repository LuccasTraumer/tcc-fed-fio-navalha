
import { Usuario } from "./Usuario";
import {Servico} from "./Servico";

export class Cliente extends Usuario {
  saldoCarteira: number;
  notaCliente: number;
  //listaBarbeariasFavoritas: ClienteBarbearia[];
  comentarios: string[];
  reputacao: number;
  listaServicoConsumidos: Servico[];
}
