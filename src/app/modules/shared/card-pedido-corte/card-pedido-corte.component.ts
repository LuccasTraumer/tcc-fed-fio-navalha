import { Component, OnInit } from '@angular/core';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'fdn-card-pedido-corte',
  templateUrl: './card-pedido-corte.component.html',
  styleUrls: ['./card-pedido-corte.component.scss']
})
export class CardPedidoCorteComponent implements OnInit {
  private _nomeSolicitante: string = 'Joao Paulo';
  private _fotoPerfil = ConstantesIcons.ICONE_UPLOAD_FOTO_PERFIL;

  public ICONE_APROVACAO_PEDIDO = ConstantesIcons.ICONE_APROVACAO_PEDIDO;
  public ICONE_CANCELAMENTO_PEDIDO = ConstantesIcons.ICONE_CANCELAMENTO_PEDIDO;
  private _servico: any = 'Corte Simples';
  private _dataServico: any = '05/07/2021';
  private _valorServico: any = 'R$ 25,00';
  private _horarioServico: any = '15:45';

  constructor() { }

  ngOnInit(): void {
  }

  nomeSolicitante() {
    return this._nomeSolicitante;
  }

  fotoPerfil() {
    return this._fotoPerfil;
  }

  servico() {
    return this._servico;
  }
  valorServico() {
    return this._valorServico;
  }

  dataServico() {
    return this._dataServico;
  }

  horarioServico() {
    return this._horarioServico;
  }

  cancelarPedido() {

  }

  aprovarPedido() {

  }
}
