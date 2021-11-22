import { Component, Input, OnInit } from '@angular/core';
import { Barbearia } from 'src/app/models/barbearia';

@Component({
  selector: 'fdn-card-barbearia-favorita',
  templateUrl: './card-barbearia-favorita.component.html',
  styleUrls: ['./card-barbearia-favorita.component.scss']
})
export class CardBarbeariaFavoritaComponent implements OnInit {

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
  @Input() fotoPerfil: String;
  @Input() distancia: Number = 0;
  @Input() tempo: Number = 0;
  @Input() valor: Number = 0;

  public favorito: boolean = true;
  public iconeFavoritar: String = "../../../../assets/icons/black-hearth.png";

  public Favoritar(): void {
    this.favorito = !this.favorito;
    if(this.favorito)
      this.iconeFavoritar = "../../../../assets/icons/black-hearth.png";
    else
      this.iconeFavoritar = "../../../../assets/icons/white-hearth.png";

  }

  constructor() { }

  ngOnInit() {}

}
