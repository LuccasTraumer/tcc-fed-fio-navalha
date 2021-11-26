import { Component, Input, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/models/agendamento';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';

@Component({
  selector: 'fdn-card-pedido-corte',
  templateUrl: './card-pedido-corte.component.html',
  styleUrls: ['./card-pedido-corte.component.scss']
})
export class CardPedidoCorteComponent implements OnInit {

  public ICONE_APROVACAO_PEDIDO = ConstantesIcons.ICONE_APROVACAO_PEDIDO;
  public ICONE_CANCELAMENTO_PEDIDO = ConstantesIcons.ICONE_CANCELAMENTO_PEDIDO;
  public pedidoAtivo: boolean = true;
  @Input() agendamento: Agendamento;
  @Input() fotoPerfil: String;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNomeSolicitante() {
    return this.agendamento.nome;
  }

  retornaFotoPerfil() {
    return this.fotoPerfil;
  }

  retornaTipoServico() {
    return this.agendamento.tipoCorte;
  }
  retornaValorServico() {
    return this.agendamento.valor;
  }

  retornaDataServico() {
    let dataHorario = this.agendamento.data.split("T");
    let data = dataHorario[0];
    return data;
  }

  retornaHorarioServico() {
    let dataHorario = this.agendamento.data.split("T");
    let horario = dataHorario[1]
    let horarioSplit = horario.split(":");
    let horaMinuto = horarioSplit[0] + ":" + horarioSplit[1];
    return horaMinuto;
  }

  cancelarPedido() {
    setTimeout(()=>{
      this.pedidoAtivo = false;
    },100);
  }

  aprovarPedido() {
    setTimeout(()=>{
      this.pedidoAtivo = false;
    },100);
  }
}
