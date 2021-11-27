import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { addDays, addHours, startOfDay } from 'date-fns';
import { Barbearia } from 'src/app/models/barbearia';
import { BarbeariaService } from 'src/app/services/Barbearia/barbearia.service';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';
import { BarbeariasResponseMock } from './../../../utils/interfaces/BarbeariasResponseMock';

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
  public barbeariasFotos: String[] = [
    this.fotosBase + "barbeariaPerfil1.jpg",
    this.fotosBase + "barbeariaPerfil2.jpg",
    this.fotosBase + "barbeariaPerfil3.jpg",
    this.fotosBase + "barbeariaPerfil4.jpg",
    this.fotosBase + "barbeariaPerfil5.jpg",
    this.fotosBase + "barbeariaPerfil6.jpg",
    this.fotosBase + "barbeariaPerfil7.jpg",
    this.fotosBase + "barbeariaPerfil8.jpg",
    this.fotosBase + "barbeariaPerfil9.jpg",
    this.fotosBase + "barbeariaPerfil10.jpg",

  ];

  public tempo: Number[] = [10, 20, 25, 15, 20, 30, 8, 15, 11, 12];
  public valor: Number[] = [50, 40, 20, 35, 25, 45, 20, 40, 15, 15];
  public distancia: Number[] = [5.4, 8.2, 9.3, 7.4, 5.5, 9, 1.7, 4.1, 2.5, 2.7];

  constructor(private barbeariaService: BarbeariaService) { }

  ngOnInit(): void {
    this.retornaBarbearias();
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
      console.log(this.barbearias[0]);
    });
  }



}


