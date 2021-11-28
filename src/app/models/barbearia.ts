import {Servico} from "./Servico";
import {Usuario} from "./Usuario";
import {Endereco} from "./Endereco";

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
  servicosRealizados: Servico[];
  comentariosSobre: string[];
  tiposPlanos: string[];
}
