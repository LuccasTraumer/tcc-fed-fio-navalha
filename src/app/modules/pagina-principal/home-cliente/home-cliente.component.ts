import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BarbeariaService } from 'src/app/services/Barbearia/barbearia.service';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';
import { BarbeariasResponseMock } from './../../../utils/interfaces/BarbeariasResponseMock';
import {HomeService} from "../services/home.service";
import {Router} from "@angular/router";
import {DadosCardService} from "../../shared/services/dados-card.service";
import {Barbearia} from "../../../models/barbearia";

@Component({
  selector: 'fdn-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .cal-week-view .cal-time-events .cal-day-column {
        margin-right: 10px;
      }

      .cal-week-view .cal-hour {
        width: calc(100% + 10px);
      }
    `,
  ],
})
export class HomeClienteComponent implements OnInit {

  public setaIcone = ConstantesIcons.ICONE_SETA_PRA_BAIXO_BLACK;
  public isPedidosExibido: boolean = true;
  public isAgendamentosExibido: boolean = true;
  public barbearias: BarbeariasResponseMock;
  public fotosBase: String = "../../../../assets/images/Barbearias/";

  public tempo: Number[] = [10, 20, 25, 15, 20, 30, 8, 15, 11, 12];
  public valor: Number[] = [50, 40, 20, 35, 25, 45, 20, 40, 15, 15];
  public distancia: Number[] = [5.4, 8.2, 9.3, 7.4, 5.5, 9, 1.7, 4.1, 2.5, 2.7];

  constructor(
    private homeService: HomeService,
    private barbeariaService: BarbeariaService,
    private router: Router,
    private dadosCardService: DadosCardService
  ) { }

  ngOnInit(): void {
    this.retornaBarbearias();
    this.homeService.buscarDadosHomeCliente();
  }

  slider(container: number) {
    if (container == 1)
      this.isPedidosExibido = !this.isPedidosExibido;
    else
      this.isAgendamentosExibido = !this.isAgendamentosExibido;
  }

  private retornaBarbearias(): void {
    this.barbeariaService.RetornaListaBarbearias().subscribe((barbearias: BarbeariasResponseMock) => {
      this.barbearias = barbearias;
    });
  }

  public detalhes(barbearia: Barbearia): void {
    this.dadosCardService.gravaDadosCardNaSessionStorage(barbearia);
    this.router.navigate(['/detalhes'], {state: {data: barbearia}});
  }
}


