import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { addDays, addHours, startOfDay } from 'date-fns';
import { interval, Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Agendamento } from 'src/app/models/agendamento';
import { AgendamentoService } from 'src/app/services/Agendamento/Agendamento.service';
import { ConstantesIcons } from 'src/app/utils/constantes.icons';
import { AgendamentosResponseMock } from 'src/app/utils/interfaces/AgendamentosResponseMock c';

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
 public agendamentos: any;
 public dataCorte: string = '';
 public horarioCorte: string = '';
 public quantidadePedidos: number = 0;
 public agendamentosConfirmados: any;

 public agendamentoSelecionado: Agendamento = {
   id: 0,
   nome: '',
   data: '',
   tipoCorte: '',
   valor: 0
 };

 public fotosBase: String = "../../../../assets/images/Pessoas/";
 public fotosPessoas: String[] = [
   this.fotosBase + "pessoaPerfil1.jpg",
   this.fotosBase + "pessoaPerfil2.jpg",
   this.fotosBase + "pessoaPerfil3.jpg",
   this.fotosBase + "pessoaPerfil4.jpg",
   this.fotosBase + "pessoaPerfil5.jpg",
   this.fotosBase + "pessoaPerfil6.jpg",
   this.fotosBase + "pessoaPerfil7.png",
   this.fotosBase + "pessoaPerfil8.jpg",
   this.fotosBase + "pessoaPerfil9.jpg",
   this.fotosBase + "pessoaPerfil10.jpg",

 ];

 constructor(private agendamentoService: AgendamentoService) {}

  ngOnInit(): void {
    this.retornaAgendamentos();
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
      title: 'Cristiano Ronaldo',
      start: addHours(startOfDay(new Date()), 10),
      id: 1,
      color: colors.blue,
    },
    {
      title: 'Elon Musk',
      start: addHours(startOfDay(new Date()), 11),
      id: 2,
      color: colors.red,
    },
    {
      title: 'Luciano Hang',
      start: addHours(startOfDay(new Date()), 13),
      id: 3,
      color: colors.yellow,
    },
    {
      title: 'Carl Jhonson',
      start: addHours(startOfDay(new Date()), 14),
      id: 4,
      color: colors.blue,
    },
  ];

  private retornaAgendamentos(): void {
    this.agendamentoService.RetornaListaAgendamentos().subscribe((agendamentos: AgendamentosResponseMock) => {
      this.agendamentos = agendamentos;
      this.agendamentosConfirmados = this.agendamentos;
      this.quantidadePedidos = this.agendamentos.length;
      // console.log(this.agendamentos[0]);
    });
  }

  public eventoClicado(event: any) {
     this.agendamentoSelecionado = this.agendamentosConfirmados.find(element => element.id === event.event.id);
     this.dataCorte = this.agendamentoSelecionado.data.split('T')[0];
     this.horarioCorte = this.agendamentoSelecionado.data.split('T')[1].substring(0, 5);
  }

  public respostaPedidoCorte(event: boolean): void {
    this.agendamentos.shift();
    this.fotosPessoas.shift();
    this.quantidadePedidos = this.agendamentos.length;
    // console.log(this.quantidadePedidos);
  }

}



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

