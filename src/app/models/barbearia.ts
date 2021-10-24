import { Usuario } from './Usuario';
import { Corte } from './corte';

export class Barbearia extends Usuario {
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
