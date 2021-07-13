import { Cliente } from './Cliente';
import { Corte } from './Corte';

export class ClienteBarbearia extends Cliente {
  agendaDisponivel: string;
  avaliacaoBarbearia: number;
  enderecosBarbearia: string[];
  especialidade: string;
  tempoMedio: number;
  precoMedio: number;
  descricao: string;
  mensalidade: number;
  horarioDisponivel: Date;
  servicosRealizados: Corte[];
  comentariosSobre: string[];
  tiposPlanos: string[];
}
