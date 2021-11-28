import { Component, Input, OnInit } from '@angular/core';
import { Barbearia } from 'src/app/models/barbearia';

@Component({
  selector: 'fdn-detalhes-barbearia',
  templateUrl: './detalhes-barbearia.component.html',
  styleUrls: ['./detalhes-barbearia.component.scss']
})
export class DetalhesBarbeariaComponent implements OnInit {

  public favoritarTxt: string = 'Seguir';
  public favoritarIcon: string = '../../../../assets/icons/white-hearth.png';
  public favorito: boolean = false;
  public dataAtual: Date = new Date();
  public horario;
  public servico;

  @Input() barbearia: Barbearia = {
    nome: "Barber Star",
    agendaDisponivel: null,
    avaliacaoBarbearia: 4.5,
    comentariosSobre: null,
    dataNascimento: null,
    descricao: null,
    endereco: null,
    enderecosBarbearia: null,
    especialidade: null,
    horarioFuncionamento: null,
    mensalidade: null,
    precoMedio: null,
    senha: null,
    servicosRealizados: null,
    tempoMedio: null,
    tipoCliente: null,
    tiposPlanos: null,
    email: null,
    fotoPerfil: null,
    telefone: null
  };
  constructor() { }

  ngOnInit() {

  }


  public salvarHorario(event) {
    this.horario = event;
  }

  public salvarServico(event) {
    this.servico = event;
  }

  public favoritar(): void {
    this.favorito = !this.favorito;
    if(!this.favorito) {
      this.favoritarTxt = "Seguir";
      this.favoritarIcon = "../../../../assets/icons/white-hearth.png";
    }
    else {
      this.favoritarTxt = "Deixar de Seguir";
      this.favoritarIcon = "../../../../assets/icons/black-hearth.png";
    }

  }


}
