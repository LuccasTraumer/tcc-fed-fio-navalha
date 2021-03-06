import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
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
  @Output() isPedidoAprovado = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public retornaNomeSolicitante() {
    return this.agendamento.nome;
  }

  public retornaFotoPerfil() {
    return this.fotoPerfil;
  }

  public retornaTipoServico() {
    return this.agendamento.tipoCorte;
  }

  public retornaValorServico() {
    return this.agendamento.valor;
  }

  public retornaDataServico() {
    let dataHorario = this.agendamento.data.split("T");
    let data = dataHorario[0];
    return data;
  }

  public retornaHorarioServico() {
    let dataHorario = this.agendamento.data.split("T");
    let horario = dataHorario[1]
    let horarioSplit = horario.split(":");
    let horaMinuto = horarioSplit[0] + ":" + horarioSplit[1];
    return horaMinuto;
  }

  public cancelarPedido() {
    setTimeout(()=>{
      this.pedidoAtivo = false;
      this.isPedidoAprovado.emit(false);
    },100);
  }

  public aprovarPedido() {
    setTimeout(()=>{
      this.pedidoAtivo = false;
      this.isPedidoAprovado.emit(true);
    },100);
  }

  pu


}
