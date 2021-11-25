import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { addDays, addHours, startOfDay } from 'date-fns';
import { interval, Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';

@Component({
  selector: 'fdn-home-barbearia',
  templateUrl: './home-barbearia.component.html',
  styleUrls: ['./home-barbearia.component.scss'],
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
export class HomeBarbeariaComponent implements OnInit {
 public setaIcone = ConstantesIcons.ICONE_SETA_PRA_BAIXO_BLACK;
 public isPedidosExibido: boolean = true;
 public isAgendamentosExibido: boolean = true;
 public dataHoraAtual: any = new Date();

 constructor() {

 }

  ngOnInit(): void {
    this.dataHoraAtual = this.retornaDataHoraAtual();
  }

  slider(container: number) {
    if(container == 1)
      this.isPedidosExibido = !this.isPedidosExibido;
    else
      this.isAgendamentosExibido = !this.isAgendamentosExibido;
  }


  retornaDataHoraAtual() : Observable<Date> {
    return interval(1000).pipe(
      mergeMap(() => of(new Date()))
    )
  }

  //calendario
  view: CalendarView = CalendarView.Day;

  viewDate: Date = new Date();
  data: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'Pedro Henrique',
      start: addHours(startOfDay(new Date()), 3),
      id: 1,
      //color: colors.blue,
    },
    {
      title: 'Cristiano Ronaldo',
      start: addHours(startOfDay(new Date()), 6),
      id: 2,
      //color: colors.blue,
    },
    {
      title: 'Lionel Messi',
      start: addHours(startOfDay(new Date()), 10),
      id: 3,
      //color: colors.blue,
    },
    {
      title: 'Elon Musk',
      start: addHours(startOfDay(new Date()), 15),
      id: 4,
      //color: colors.blue,
    },
  ];


  public eventoClicado(event: any) {
    console.log(event);

  }

}


/*
export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
*/
