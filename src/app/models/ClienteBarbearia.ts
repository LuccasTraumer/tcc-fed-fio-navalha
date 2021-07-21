import { Cliente } from './Cliente';
import { Corte } from './Corte';

export class ClienteBarbearia extends Cliente {
  agendaDisponivel: Date[];
  avaliacaoBarbearia: number;
  enderecosBarbearia: string[];
  especialidade: string;
  tempoMedio: number;
  precoMedio: number;
  descricao: string;
  mensalidade: number;
  horarioFuncionamento: Date[];
  servicosRealizados: Corte[];
  comentariosSobre: string[];
  tiposPlanos: string[];
}
